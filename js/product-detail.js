const qtyWrap = document.querySelector(".product-qty");
const qtyValue = qtyWrap?.querySelector("span");
const qtyButtons = qtyWrap?.querySelectorAll("button");

qtyButtons?.[0]?.addEventListener("click", () => {
  const next = Math.max(1, Number(qtyWrap.dataset.qty || 1) - 1);
  qtyWrap.dataset.qty = String(next);
  if (qtyValue) qtyValue.textContent = String(next);
});

qtyButtons?.[1]?.addEventListener("click", () => {
  const next = Number(qtyWrap.dataset.qty || 1) + 1;
  qtyWrap.dataset.qty = String(next);
  if (qtyValue) qtyValue.textContent = String(next);
});

document.querySelectorAll(".product-card-link .product-wish, .product-card-link .product-cart").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
