/* Thyagaraju Pathur — portfolio interactions
   Vanilla JS, no dependencies. */

(function () {
  "use strict";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Live clock in the top bar ---- */
  var clockEl = document.getElementById("clock");
  if (clockEl) {
    var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
    var tick = function () {
      var d = new Date();
      clockEl.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ---- Scroll-reveal for work cells ---- */
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealItems = document.querySelectorAll(".reveal");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          // small stagger based on position
          var delay = (Array.prototype.indexOf.call(revealItems, el) % 2) * 90;
          setTimeout(function () { el.classList.add("in"); }, delay);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    revealItems.forEach(function (el) { io.observe(el); });
  }
})();
