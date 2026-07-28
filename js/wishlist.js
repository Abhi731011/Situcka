const tabs = document.querySelectorAll(".wishlist-tab");
const productsPanel = document.getElementById("wishlist-products");
const placesPanel = document.getElementById("wishlist-places");
const list = document.querySelector(".wishlist-list");
const clearBtn = document.querySelector(".wishlist-clear");
const countEls = document.querySelectorAll(".wishlist-tab[data-tab='products'] span, .wishlist-panel__head h2 span");

function updateCounts() {
  const count = list?.querySelectorAll(".wishlist-item").length || 0;
  countEls.forEach((el) => {
    el.textContent = `(${count})`;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.getAttribute("data-tab");
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });

    const showProducts = key === "products";
    productsPanel?.classList.toggle("is-active", showProducts);
    placesPanel?.classList.toggle("is-active", !showProducts);
    if (productsPanel) productsPanel.hidden = !showProducts;
    if (placesPanel) placesPanel.hidden = showProducts;
  });
});

document.querySelectorAll(".wishlist-item__remove, .wishlist-item__heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".wishlist-item")?.remove();
    updateCounts();
  });
});

clearBtn?.addEventListener("click", () => {
  list?.replaceChildren();
  updateCounts();
});
