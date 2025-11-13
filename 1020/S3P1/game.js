// -----------------------------
// Global state
// -----------------------------
var state = {
  trust: 0,
  ended: false,
  submode: null     
};

var imgMap = {
  neutral: "Assets/1.Neutral.png",
  suspicious: "Assets/2.Suspicious.png",
  defensive: "Assets/3.Defensive.png",
  relaxed: "Assets/4.Relaxed.png",
  curious: "Assets/5.Curious.png",
  end_failure: "Assets/6.Running.png",
  end_success: "Assets/7.Success.png"
};

// DOM elements (set on DOMContentLoaded)
var catImg;
var cmdInput;
var cmdForm;
var restartBtn;
var trustFill;

// -----------------------------
// Cat pose helper
// -----------------------------
function setCatPose(poseName) {
  var key = poseName;
  if (poseName === "run") {
    key = "end_failure";
  } else if (poseName === "success") {
    key = "end_success";
  }

  catImg.src = imgMap[key];

  // reset previous pose class and apply new one
  catImg.className = "";         // clears old classes (id stays)
  catImg.classList.add("cat-" + poseName);
}

// -----------------------------
// Helper functions
// -----------------------------

// Roll a six-sided die (1–6)
function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

// Show a line in the dialogue textbox
function logLine(text, cssClass) {
  var textbox = document.getElementById("textbox-text");

  if (cssClass === "success") {
    text = "✔ " + text;
  } else if (cssClass === "warn") {
    text = "• " + text;
  } else if (cssClass === "error") {
    text = "✖ " + text;
  }
  textbox.textContent = text;
}

// Change trust and update the bar
function updateTrust(delta) {
  state.trust += delta;
  updateTrustUI();
}

// Trust bar UI (updates every time trust changes)
// trust range is -2 … 10 → 12 steps
function updateTrustUI() {
  if (!trustFill) return;

  let t = state.trust;

  // clamp to [-2, 10]
  if (t < -2) t = -2;
  if (t > 10) t = 10;

  // shift to 0..12 range
  let normalized = t + 2;  
  let pct = (normalized / 12) * 100;

  trustFill.style.width = pct + "%";
}

// Choose cat image based on current trust (unless ended)
function setImageByTrust() {
  if (state.ended) return;

  if (state.trust <= -1) {
    setCatPose("defensive");
  } else if (state.trust <= 2) {     
    setCatPose("neutral");
  } else if (state.trust <= 5) {   
    setCatPose("suspicious");
  } else if (state.trust <= 7) {     
    setCatPose("relaxed");
  } else if (state.trust < 10) {    
    setCatPose("curious");
  }
}

// -----------------------------
// Base one-step commands
// -----------------------------
// Only commands that resolve immediately (no sub-options)
// Each outcome object: { min, max, text, dTrust, cssClass }

var COMMANDS = {
  "wait()": [
    { min: 1, max: 1, text: "[INFO] Nothing happens.",                  
      dTrust:  0, cssClass: "warn"  
    },

    { min: 2, max: 5, text: "[INFO] Cat relaxes nearby. trust+1",       
      dTrust: +1, cssClass: "success" 
    },

    { min: 6, max: 6, text: "[SUCCESS] Cat approaches you. trust+2",    
      dTrust: +2, cssClass: "success" 
    }
  ],

  "debug(cat)": [
    { min: 1, max: 2, text: "[FATAL] Cat dislikes analysis. trust-2",   
      dTrust: -2, cssClass: "error" 
    },

    { min: 3, max: 4, text: "[INFO] Observation mode active.",          
      dTrust:  0, cssClass: "warn"  
    },

    { min: 5, max: 6, text: "[SUCCESS] You read the body language. trust+1",                                                           
      dTrust: +1, cssClass: "success" 
    }
  ]
};

// -----------------------------
// Ending checks
// -----------------------------
function checkEnding() {
  if (state.trust >= 10) {
    setCatPose("success");
    logLine("[SUCCESS] Cat sits beside you. LoveEstablishedException();", "success");
    state.ended = true;
    state.submode = null;   // clear any pending sub choice

  } else if (state.trust <= -2) {
    setCatPose("run");
    logLine("[FATAL] Cat escaped(). tryAgain();", "error");
    state.ended = true;
    state.submode = null;   // clear any pending sub choice
  }
}

// -----------------------------
// Apply outcome / handle base commands
// -----------------------------
function applyOutcome(list, roll) {
  var outcome = null;

  for (var i = 0; i < list.length; i++) {
    var o = list[i];
    if (roll >= o.min && roll <= o.max) {
      outcome = o;
      break;
    }
  }

  if (!outcome) {
    outcome = list[list.length - 1];
  }

  if (outcome.customFn) {
    outcome.customFn();
  } else {
    updateTrust(outcome.dTrust || 0);
  }

  var message = outcome.text + "  (d6=" + roll + ")";
  logLine(message, outcome.cssClass);

  checkEnding();
  setImageByTrust();
}

// -----------------------------
// Handling commands
// -----------------------------
function handleCommand(input) {
  var cmd = input.trim();
  if (cmd === "") return;

  // "help" always jumps back to the instructions page
  if (cmd === "help") {
    window.location.href = "instructions.html";
    return;
  }

  // If game already ended
  if (state.ended) {
    logLine("[INFO] Program ended. Press Restart.", "warn");
    return;
  }

  // If we're waiting for a second-level choice, handle that
  if (state.submode) {
    handleSubcommand(cmd);
    return;
  }

  // Main commands that open sub-choices
  if (cmd === "feed(cat)") {
    state.submode = "feed";
    logLine("Choose what to feed: feed(fish), feed(treat), feed(leaf)", "warn");
    return;
  }

  if (cmd === "pet(cat)") {
    state.submode = "pet";
    logLine("Choose where to pet: pet(head), pet(back), pet(belly)", "warn");
    return;
  }

  if (cmd === "play(cat)") {
    state.submode = "play";
    logLine("Choose toy: play(string), play(laser), play(rock)", "warn");
    return;
  }

  if (cmd === "call(cat)") {
    state.submode = "call";
    logLine("How do you call the cat?: call(pspsps), call(whistle), call(yell)", "warn", );
    return;
  }

  // Otherwise, try base one-step commands (wait, debug)
  var table = COMMANDS[cmd];
  if (!table) {
  logLine(
    "[ERROR] Unknown command: " + cmd +
    "\n• Available commands: feed(cat), pet(cat), play(cat), wait(), call(cat), debug(cat), help",
    "error");
  return;
}

  var roll = rollD6();
  applyOutcome(table, roll);
}

// -----------------------------
// Handling second-step subcommands
// -----------------------------
function handleSubcommand(cmd) {
  var roll = rollD6();
  var dTrust = 0;
  var msg = "";

  // ---------- FEED ----------
  if (state.submode === "feed") {
    if (cmd === "feed(fish)") {
      if (roll >= 5) { dTrust = +2; msg = "[SUCCESS] Cat devours the fish. trust+2"; }
      else if (roll >= 3) { dTrust = +1; msg = "[INFO] Cat eats neatly. trust+1"; }
      else { dTrust = 0; msg = "[WARN] Cat isn’t hungry right now."; }

    } else if (cmd === "feed(treat)") {
      if (roll >= 5) { dTrust = +2; msg = "[SUCCESS] Cat loves the treat. trust+2"; }
      else if (roll >= 2) { dTrust = +1; msg = "[INFO] Cat nibbles the treat. trust+1"; }
      else { dTrust = -1; msg = "[ERROR] Cat sniffs and walks away. trust-1"; }

    } else if (cmd === "feed(leaf)") {
      if (roll === 6) { dTrust = 0; msg = "[WARN] Cat ignores the leaf."; }
      else if (roll >= 3) { dTrust = -1; msg = "[ERROR] Cat looks offended. trust-1"; }
      else { dTrust = -2; msg = "[FATAL] Cat thinks you’re strange. trust-2"; }

    } else {
        logLine("[ERROR] Unknown feed option: " + cmd +
        "\n• Available commands: feed(fish), feed(treat), feed(leaf)",
        "error");
      return;
    }
  }

  // ---------- PET ----------
  else if (state.submode === "pet") {
    if (cmd === "pet(head)") {
      if (roll >= 5) { dTrust = +2; msg = "[SUCCESS] Perfect chin scritches. trust+2"; }
      else if (roll >= 3) { dTrust = +1; msg = "[INFO] Cat tolerates head pats. trust+1"; }
      else { dTrust = -1; msg = "[ERROR] Cat ducks away. trust-1"; }

    } else if (cmd === "pet(back)") {
      if (roll >= 4) { dTrust = +1; msg = "[INFO] Back pets accepted. trust+1"; }
      else if (roll >= 2) { dTrust = 0; msg = "[WARN] Cat walks a few steps forward."; }
      else { dTrust = -1; msg = "[ERROR] Tail flick of disapproval. trust-1"; }

    } else if (cmd === "pet(belly)") {
      if (roll === 6) { dTrust = +3; msg = "[LEGENDARY] Cat accepts belly rub. trust+3"; }
      else if (roll >= 3) { dTrust = -1; msg = "[ERROR] Cat grabs your hand. trust-1"; }
      else { dTrust = -2; msg = "[FATAL] Instant murder-paws. trust-2"; }

    } else {
      logLine("[ERROR] Unknown pet option: " + cmd +
      "\n• Available commands: pet(head), pet(back), pet(belly)",
      "error");
      return;
    }
  }

  // ---------- PLAY ----------
  else if (state.submode === "play") {
    if (cmd === "play(string)") {
      if (roll >= 4) { dTrust = +2; msg = "[SUCCESS] Cat chases the string. trust+2"; }
      else if (roll >= 2) { dTrust = +1; msg = "[INFO] Cat watches with interest. trust+1"; }
      else { dTrust = 0; msg = "[WARN] Cat looks away."; }

    } else if (cmd === "play(laser)") {
      if (roll >= 5) { dTrust = +3; msg = "[SUCCESS] Zoomies unleashed. trust+3"; }
      else if (roll >= 3) { dTrust = +1; msg = "[INFO] Cat follows the dot. trust+1"; }
      else { dTrust = -1; msg = "[ERROR] Cat gets frustrated. trust-1"; }

    } else if (cmd === "play(rock)") {
      if (roll === 6) { dTrust = +1; msg = "[INFO] Cat bats the rock once. trust+1"; }
      else { dTrust = -1; msg = "[ERROR] This is not a toy. trust-1"; }

    } else {
      logLine("[ERROR] Unknown play option: " + cmd +
      "\n• Available commands: play(string), play(laser), play(rock)",
      "error");
      return;
    }
  }

  // ---------- CALL ----------
  else if (state.submode === "call") {
    if (cmd === "call(pspsps)") {
      if (roll >= 4) { dTrust = +2; msg = "[SUCCESS] Cat comes closer. trust+2"; }
      else if (roll >= 2) { dTrust = +1; msg = "[INFO] Cat glances your way. trust+1"; }
      else { dTrust = 0; msg = "[WARN] Cat pretends not to hear."; }

    } else if (cmd === "call(whistle)") {
      if (roll >= 5) { dTrust = +1; msg = "[INFO] Cat tilts its head. trust+1"; }
      else { dTrust = -1; msg = "[ERROR] That sound was weird. trust-1"; }

    } else if (cmd === "call(yell)") {
      if (roll === 6) { dTrust = 0; msg = "[WARN] Cat is startled, but stays."; }
      else { dTrust = -2; msg = "[FATAL] Cat bolts away from the noise. trust-2"; }

    } else {
      logLine("[ERROR] Unknown call option: " + cmd +
      "\n• Available commands: call(pspsps), call(whistle), call(yell)",
      "error");
      return;
    }

  } else {
    logLine("[ERROR] No action waiting for options.", "error");
    return;
  }

  // Apply trust change and show result
  updateTrust(dTrust);
  logLine(
    msg + "  (d6=" + roll + ")",
    dTrust > 0 ? "success" : (dTrust < 0 ? "error" : "warn")
  );

  checkEnding();
  setImageByTrust();

  // Back to normal mode
  state.submode = null;
}

// -----------------------------
// Restart / init
// -----------------------------
function restart() {
  state.trust = 0;
  state.ended = false;
  state.submode = null;

  setCatPose("neutral");
  logLine("The cat is watching you.", "");
  updateTrustUI();
}

// -----------------------------
// DOM ready
// -----------------------------
document.addEventListener("DOMContentLoaded", function () {
  catImg = document.getElementById("cat");
  cmdInput = document.getElementById("cmd");
  cmdForm = document.getElementById("cmdForm");
  restartBtn = document.getElementById("restart");
  trustFill = document.querySelector(".trust-fill");

  // initial state
  restart();

  cmdForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var value = cmdInput.value;
    cmdInput.value = "";
    handleCommand(value);
  });

  restartBtn.addEventListener("click", function () {
    restart();
  });
});
