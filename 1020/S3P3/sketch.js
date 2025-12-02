const CONFIG = {
  minSize: 16,
  palette: ["#ffffff", "#000000", "#225095", "#dd0100", "#fac901"],
  strokeWidth: 4
};

const dom = {
  canvas: null,
  ctx: null,
  footer: null,
  compressionLabel: null
};

const state = {
  roots: [],
  dragging: false
};

class Quad {
  constructor(x, y, size, color = randomColor()) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.children = null;
  }

  contains(x, y) {
    return (
      x >= this.x &&
      x < this.x + this.size &&
      y >= this.y &&
      y < this.y + this.size
    );
  }

  subdivide() {
    const half = this.size / 2;
    this.children = [
      new Quad(this.x, this.y, half),
      new Quad(this.x + half, this.y, half),
      new Quad(this.x, this.y + half, half),
      new Quad(this.x + half, this.y + half, half)
    ];
  }

  paint(x, y) {
    if (!this.contains(x, y)) return false;
    if (this.size > CONFIG.minSize && !this.children) this.subdivide();
    if (this.children) {
      for (const child of this.children) {
        if (child.contains(x, y)) return child.paint(x, y);
      }
    }
    return true;
  }

  render() {
    dom.ctx.fillStyle = this.color;
    dom.ctx.fillRect(this.x, this.y, this.size, this.size);
    dom.ctx.strokeStyle = "#000000";
    dom.ctx.lineWidth = CONFIG.strokeWidth;
    dom.ctx.strokeRect(this.x, this.y, this.size, this.size);
    if (this.children) this.children.forEach(child => child.render());
  }

  countLeaves() {
    if (!this.children) return 1;
    return this.children.reduce((sum, child) => sum + child.countLeaves(), 0);
  }
}

function footerHeight() {
  return dom.footer ? dom.footer.offsetHeight : 32;
}

function refreshLayout(p) {
  p.resizeCanvas(window.innerWidth, window.innerHeight - footerHeight());
  state.roots = createInitialSquares(p.width, p.height);
  render();
}

function createInitialSquares(width, height) {
  return width >= height
    ? createHorizontalPair(width, height)
    : createVerticalPair(width, height);
}

function createHorizontalPair(width, height) {
  const size = snappedSize(Math.max(height, width / 2));
  const totalWidth = size * 2;
  const offsetX = (width - totalWidth) / 2;
  const offsetY = (height - size) / 2;
  return [
    new Quad(offsetX, offsetY, size),
    new Quad(offsetX + size, offsetY, size)
  ];
}

function createVerticalPair(width, height) {
  const size = snappedSize(Math.max(width, height / 2));
  const totalHeight = size * 2;
  const offsetX = (width - size) / 2;
  const offsetY = (height - totalHeight) / 2;
  return [
    new Quad(offsetX, offsetY, size),
    new Quad(offsetX, offsetY + size, size)
  ];
}

function snappedSize(value) {
  return Math.ceil(value / CONFIG.minSize) * CONFIG.minSize;
}

function canvasSize() {
  const width = pRef
    ? pRef.width
    : dom.canvas
    ? dom.canvas.width
    : window.innerWidth;
  const height = pRef
    ? pRef.height
    : dom.canvas
    ? dom.canvas.height
    : window.innerHeight - footerHeight();
  return { width, height };
}

function render() {
  const { width, height } = canvasSize();

  dom.ctx.clearRect(0, 0, width, height);
  dom.ctx.fillStyle = "#ffffff";
  dom.ctx.fillRect(0, 0, width, height);
  state.roots.forEach(root => root.render());
  drawInitialDividerIfNeeded(width, height);
  updateCompression();
}

function randomColor() {
  return pRef
    ? pRef.random(CONFIG.palette)
    : CONFIG.palette[Math.floor(Math.random() * CONFIG.palette.length)];
}

function updateCompression() {
  if (!state.roots.length) return;
  const leaves = state.roots.reduce((sum, root) => sum + root.countLeaves(), 0);
  const { width, height } = canvasSize();
  const cellsX = Math.ceil(width / CONFIG.minSize);
  const cellsY = Math.ceil(height / CONFIG.minSize);
  const ratio = leaves / (cellsX * cellsY);
  dom.compressionLabel.textContent =
    "Compression: " + ratio.toExponential(2);
}

function drawInitialDividerIfNeeded(width, height) {
  if (state.roots.length !== 2) return;
  if (state.roots.some(root => root.children)) return;

  dom.ctx.save();
  dom.ctx.strokeStyle = "#000000";
  dom.ctx.lineWidth = CONFIG.strokeWidth;

  const [a, b] = state.roots;
  const sameRow = Math.abs(a.y - b.y) < 0.001;
  dom.ctx.beginPath();
  if (sameRow) {
    const dividerX = a.x < b.x ? a.x + a.size : b.x + b.size;
    dom.ctx.moveTo(dividerX, 0);
    dom.ctx.lineTo(dividerX, height);
  } else {
    const dividerY = a.y < b.y ? a.y + a.size : b.y + b.size;
    dom.ctx.moveTo(0, dividerY);
    dom.ctx.lineTo(width, dividerY);
  }
  dom.ctx.stroke();
  dom.ctx.restore();
}

function paintAt(x, y) {
  if (!state.roots.length) return;
  for (const root of state.roots) {
    if (root.contains(x, y) && root.paint(x, y)) {
      render();
      break;
    }
  }
}

let pRef = null;

const sketch = p => {
  p.setup = () => {
    pRef = p;
    dom.footer = document.getElementById("footer");
    dom.compressionLabel = document.getElementById("compression");

    // Replace placeholder canvas with the p5-managed one to keep layout identical.
    const placeholder = document.getElementById("canvas");
    const c = p.createCanvas(window.innerWidth, window.innerHeight - footerHeight());
    c.elt.id = "canvas";
    placeholder.replaceWith(c.elt);
    dom.canvas = c.elt;
    dom.ctx = c.drawingContext;

    state.roots = createInitialSquares(p.width, p.height);
    render();
  };

  p.windowResized = () => refreshLayout(p);

  p.mousePressed = () => {
    const { height } = canvasSize();
    if (p.mouseY > height || p.mouseY < 0) return;
    state.dragging = true;
    paintAt(p.mouseX, p.mouseY);
  };

  p.mouseDragged = () => {
    if (!state.dragging) return;
    const { height } = canvasSize();
    if (p.mouseY > height || p.mouseY < 0) return;
    paintAt(p.mouseX, p.mouseY);
  };

  p.mouseReleased = () => {
    state.dragging = false;
  };
};

new p5(sketch);
