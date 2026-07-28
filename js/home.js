const overlay = document.querySelector(".mobile-overlay");

overlay?.addEventListener("click", () => {
  document.body.classList.remove("sidebar-open");
  document.querySelector(".menu-button")?.setAttribute("aria-expanded", "false");
});

document.querySelectorAll(".restaurant-card-link .product-wish, .product-card-link .product-wish, .product-card-link .product-cart").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
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
