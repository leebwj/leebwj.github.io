/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

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

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

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
