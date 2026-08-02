const items = [...document.querySelectorAll(".cart-item")];
const countEl = document.querySelector(".cart-count");
const methodBtns = [...document.querySelectorAll(".cart-method__option")];
const payOptions = [...document.querySelectorAll(".cart-pay")];

function updateCount() {
  const remaining = document.querySelectorAll(".cart-item").length;
  if (countEl) countEl.textContent = `${remaining} Item${remaining === 1 ? "" : "s"}`;
}

items.forEach((item) => {
  const valueEl = item.querySelector("[data-qty-value]");
  const priceEl = item.querySelector(".cart-item__price");
  const unit = Number(item.dataset.price || 0);

  item.querySelectorAll("[data-qty]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const delta = Number(btn.getAttribute("data-qty") || 0);
      let qty = Number(valueEl?.textContent || 1) + delta;
      qty = Math.max(1, qty);
      if (valueEl) valueEl.textContent = String(qty);
      if (priceEl) priceEl.textContent = `${(unit * qty).toFixed(2)} XAF`;
    });
  });

  item.querySelector(".cart-item__remove")?.addEventListener("click", () => {
    item.remove();
    updateCount();
  });
});

methodBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    methodBtns.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});

payOptions.forEach((label) => {
  label.addEventListener("click", () => {
    payOptions.forEach((l) => l.classList.remove("is-active"));
    label.classList.add("is-active");
  });
});

document.getElementById("cart-promo")?.addEventListener("submit", (event) => {
  event.preventDefault();
});

const notesInput = document.getElementById("cart-notes-input");
const notesCount = document.getElementById("cart-notes-count");

notesInput?.addEventListener("input", () => {
  if (notesCount) notesCount.textContent = String(notesInput.value.length);
});
