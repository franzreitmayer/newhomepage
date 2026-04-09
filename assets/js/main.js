/* main.js – minimal progressive enhancement */

(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.querySelector(".site-nav__toggle");
  var menu   = document.querySelector(".site-nav__links");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* Close menu on link click (single-page-style nav) */
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Mark active nav link ---------- */
  var path = window.location.pathname.replace(/\/$/, "");
  document.querySelectorAll(".site-nav__links a").forEach(function (a) {
    var href = a.getAttribute("href").replace(/\/$/, "");
    if (href && path.endsWith(href)) {
      a.setAttribute("aria-current", "page");
    }
  });
}());
