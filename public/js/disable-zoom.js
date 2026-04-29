document.addEventListener("wheel", function(e) {
  if (e.ctrlKey) e.preventDefault();
}, { passive: false });

document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
    e.preventDefault();
  }
});

document.addEventListener('touchmove', function(e) {
  if (e.scale !== 1) e.preventDefault();
}, { passive: false });