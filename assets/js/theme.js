/* Light/dark theme toggle, shared by all pages.
 *
 * Load it as a plain (non-deferred) script at the very top of the page,
 * so the theme is set before anything paints and there is no flash.
 * Uses the visitor's saved choice if there is one (stored per browser and
 * shared across pages), otherwise the system setting.
 * The button is any element with class "theme-toggle".
 */
(function () {
  var KEY = 'theme';
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.setAttribute('aria-label', label);
      btn.title = label;
    });
  }

  apply(saved() || (media.matches ? 'dark' : 'light'));

  /* Follow system changes until the visitor picks a theme */
  media.addEventListener('change', function (e) {
    if (!saved()) apply(e.matches ? 'dark' : 'light');
  });

  document.addEventListener('DOMContentLoaded', function () {
    apply(root.getAttribute('data-theme'));
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(KEY, next); } catch (e) {}
        apply(next);
      });
    });
  });
})();
