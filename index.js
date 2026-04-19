/* Keyboard-only focus outlines */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

/* Back to top */

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

/* Nav: scroll background + active link highlight */

const siteNav = document.getElementById('site-nav');
const navLinks = document.querySelectorAll('.nav__link[data-section]');

// Sort sections by their actual DOM position so scroll spy always picks the correct one
const navSections = Array.from(navLinks)
  .map(link => document.getElementById(link.dataset.section))
  .filter(Boolean)
  .sort((a, b) => a.offsetTop - b.offsetTop);

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Back to top
  if (scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }

  // Nav background
  if (scrollY > 60) {
    siteNav.classList.add('nav--scrolled');
  } else {
    siteNav.classList.remove('nav--scrolled');
  }

  // Active nav link — last section whose top edge has passed the 40% viewport mark wins
  const scrollMid = scrollY + window.innerHeight * 0.4;
  let activeId = null;
  navSections.forEach(section => {
    if (section.offsetTop <= scrollMid) {
      activeId = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('nav__link--active', link.dataset.section === activeId);
  });
});

/* Slideshows */

const slideshows = document.querySelectorAll(".work__slideshow");

slideshows.forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll(".work__slide"));
  if (slides.length < 2) return;

  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (index === -1) index = 0;

  const intervalMs = Number(slideshow.dataset.interval) || 4000;
  const nextButton = slideshow.querySelector(".work__slide-control--next");
  const prevButton = slideshow.querySelector(".work__slide-control--prev");
  let timerId = null;

  const showSlide = (nextIndex) => {
    slides[index].classList.remove("is-active");
    index = (nextIndex + slides.length) % slides.length;
    slides[index].classList.add("is-active");
  };

  const advance = (step) => {
    showSlide(index + step);
  };

  const resetTimer = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setInterval(() => advance(1), intervalMs);
  };

  nextButton?.addEventListener("click", () => {
    advance(1);
    resetTimer();
  });

  prevButton?.addEventListener("click", () => {
    advance(-1);
    resetTimer();
  });

  resetTimer();
});

/* Work tabs */

const tabs = document.querySelectorAll('.work__tab');
const allBoxes = Array.from(document.querySelectorAll('.work__box'));

function applyTab(activeTabEl) {
  const tabName = activeTabEl.dataset.tab;

  const matching = tabName === 'recent'
    ? allBoxes.slice(0, 3)
    : allBoxes.filter(box => box.dataset.tabs.split(' ').includes(tabName));

  allBoxes.forEach(box => {
    if (matching.includes(box)) {
      box.classList.remove('work__box--hidden');
      box.classList.remove('work__box--entering');
      void box.offsetWidth;
      box.classList.add('work__box--entering');
    } else {
      box.classList.add('work__box--hidden');
    }
  });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    applyTab(tab);
  });
});

applyTab(tabs[0]);
