/* Before/after comparison slider for thumbnails.
 *
 * Markup (see README.md):
 *   <div class="pub-thumb compare">
 *     <img ...bottom image...>
 *     <img class="compare-top" ...top image, shown left of the line...>
 *     <span class="compare-handle">...</span>
 *     <input class="compare-range" type="range" min="0" max="100" value="50">
 *   </div>
 *
 * Mouse/touch/pen: drag anywhere on the image (pointer events, so it also
 * works on iOS, where an invisible range input only reacts to its knob).
 * Keyboard/screen readers: the range input (Tab to it, then arrow keys).
 */
document.querySelectorAll('.compare').forEach(function (box) {
  var range = box.querySelector('.compare-range');
  var dragging = false;

  function set(percent) {
    var p = Math.min(100, Math.max(0, percent));
    box.style.setProperty('--pos', p + '%');
    range.value = p;
  }

  function fromPointer(e) {
    var rect = box.getBoundingClientRect();
    set(((e.clientX - rect.left) / rect.width) * 100);
  }

  box.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    dragging = true;
    box.classList.add('dragging');
    try { box.setPointerCapture(e.pointerId); } catch (err) {}
    fromPointer(e);
  });

  box.addEventListener('pointermove', function (e) {
    if (dragging) fromPointer(e);
  });

  function stop() {
    dragging = false;
    box.classList.remove('dragging');
  }
  box.addEventListener('pointerup', stop);
  box.addEventListener('pointercancel', stop);

  range.addEventListener('input', function () {
    set(Number(range.value));
  });

  set(Number(range.value));
});
