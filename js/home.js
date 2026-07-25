const overlay = document.querySelector(".mobile-overlay");

overlay?.addEventListener("click", () => {
  document.body.classList.remove("sidebar-open");
  document.querySelector(".menu-button")?.setAttribute("aria-expanded", "false");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.body.classList.remove("sidebar-open");
    document.querySelector(".menu-button")?.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    document.body.classList.remove("sidebar-open");
  }
});
