function initMobileNav(header) {
  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".main-nav, .nav-menu");

  if (!toggle || !nav) return;

  if (!nav.id) {
    nav.id = `primary-nav-${Math.random().toString(36).slice(2)}`;
  }

  toggle.setAttribute("aria-controls", nav.id);

  const closeNav = () => {
    header.classList.remove("is-nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const toggleNav = () => {
    const isOpen = header.classList.toggle("is-nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleNav();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      closeNav();
    }
  });
}

document.querySelectorAll(".site-header, .top-bar").forEach(initMobileNav);
