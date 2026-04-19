/* ── Custom cursor ── */

const dot  = document.querySelector('.cursor--dot');
const ring = document.querySelector('.cursor--ring');

if (dot && ring) {
  document.addEventListener('mousemove', (e) => {
    dot.style.transform  = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    ring.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hovering'));
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}

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
