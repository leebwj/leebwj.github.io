document.addEventListener('DOMContentLoaded', () => {

  const rootStyles = getComputedStyle(document.documentElement);
  const fadeOutDuration = parseFloat(rootStyles.getPropertyValue('--fade-out').replace('ms', ''));
  const outDelay        = parseFloat(rootStyles.getPropertyValue('--out-delay').replace('ms', ''));
  const totalFadeOutTime = fadeOutDuration + outDelay;

  const ACTIVE_STATE_DURATION = 1250;

  const cells = document.querySelectorAll('.cell');

  const colors       = ['#ff0000', '#00bbff', '#fff200', '#00ff5e', '#ff8800'];
  const imageClasses = ['image-1', 'image-2', 'image-3', 'image-4', 'image-5'];

  function deactivateCell(cell) {
    cell.classList.remove('is-active');
    cell.classList.add('is-fading-out');
    setTimeout(() => cell.classList.remove('is-fading-out'), totalFadeOutTime);
  }

  function activateCell(cell) {
    if (cell.classList.contains('is-active') || cell.classList.contains('is-fading-out')) return;
    cell.classList.add('is-active');
    setTimeout(() => deactivateCell(cell), ACTIVE_STATE_DURATION);
  }

  cells.forEach(cell => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    cell.style.setProperty('--flash', randomColor);

    const randomImageClass = imageClasses[Math.floor(Math.random() * imageClasses.length)];
    cell.classList.add(randomImageClass);

    cell.addEventListener('click', () => activateCell(cell));
  });

  const IGNORE_KEYS = new Set([
    'Tab','Shift','Meta','Alt','Control','CapsLock','Escape',
    'ArrowUp','ArrowDown','ArrowLeft','ArrowRight'
  ]);

  document.addEventListener('keydown', (e) => {
    if (IGNORE_KEYS.has(e.key)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.repeat) return; 

    const randomIndex = Math.floor(Math.random() * cells.length);
    activateCell(cells[randomIndex]);
  });
});
