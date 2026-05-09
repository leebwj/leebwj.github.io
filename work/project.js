/* ── Custom cursor ── */

const ring = document.querySelector('.cursor--ring');

if (ring) {
  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  const LERP = 0.12;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  (function loop() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ring.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hovering'));
  });

  document.addEventListener('mouseleave', () => { ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { ring.style.opacity = ''; });
}

/* ── Lightbox ── */

(function () {
  const overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  const lbImg = document.createElement('img');
  overlay.appendChild(lbImg);
  document.body.appendChild(overlay);

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    requestAnimationFrame(() => overlay.classList.add('is-open'));
  }

  function close() {
    overlay.classList.remove('is-open');
  }

  overlay.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  document.querySelectorAll('.cs-grid img, .cs-pass-strip img, .cs-full-media img, [data-reveal] img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      open(img.src, img.alt);
    });
  });
})();

/* ── Nav scroll state ── */

const csNav = document.querySelector('.cs-nav');
if (csNav) {
  window.addEventListener('scroll', () => {
    csNav.classList.toggle('cs-nav--scrolled', window.scrollY > 60);
  });
}

/* ── Scroll reveal ── */

const reveals = document.querySelectorAll('[data-reveal]');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => entry.target.classList.add('is-revealed'), delay);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => io.observe(el));
}
