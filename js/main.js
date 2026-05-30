(function () {
  const nav = document.getElementById("site-nav");
  const toggle = document.querySelector(".nav-toggle");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  const ctaForm = document.querySelector(".cta-form");

  if (ctaForm) {
    const input = ctaForm.querySelector('input[type="email"]');
    const button = ctaForm.querySelector("button");

    const showPrototypeMessage = function () {
      if (!input) {
        return;
      }

      if (typeof input.reportValidity === "function" && !input.reportValidity()) {
        return;
      }

      if (input.value) {
        alert("Thanks — prototype form only. Connect your endpoint to capture: " + input.value);
      }
    };

    button?.addEventListener("click", showPrototypeMessage);
    input?.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        showPrototypeMessage();
      }
    });
  }
})();
