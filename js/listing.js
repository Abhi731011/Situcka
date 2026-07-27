document.querySelectorAll(".restaurant-card-link .product-wish").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});

function closeFilters() {
  document.body.classList.remove("filters-open");
  document.querySelector(".filters-open")?.setAttribute("aria-expanded", "false");
}

function openFilters() {
  document.body.classList.add("filters-open");
  document.querySelector(".filters-open")?.setAttribute("aria-expanded", "true");
}

document.querySelector(".listing-back")?.addEventListener("click", (event) => {
  if (window.history.length > 1) {
    event.preventDefault();
    window.history.back();
  }
});

document.querySelector(".filters-open")?.addEventListener("click", () => {
  if (document.body.classList.contains("filters-open")) {
    closeFilters();
  } else {
    openFilters();
  }
});

document.querySelector(".filters-close")?.addEventListener("click", closeFilters);
document.querySelector(".filters-overlay")?.addEventListener("click", closeFilters);

document.querySelector(".filters-clear")?.addEventListener("click", () => {
  document
    .querySelectorAll('.filters-panel input[type="checkbox"]')
    .forEach((input) => {
      input.checked = false;
    });

  const min = document.querySelector(".price-range__min");
  const max = document.querySelector(".price-range__max");
  if (min) min.value = "0";
  if (max) max.value = "100";
  updatePriceRangeFill();
});

function updatePriceRangeFill() {
  const min = document.querySelector(".price-range__min");
  const max = document.querySelector(".price-range__max");
  const fill = document.querySelector(".price-range__fill");
  const minLabel = document.querySelector(".price-range__min-label");
  const maxLabel = document.querySelector(".price-range__max-label");
  if (!min || !max || !fill) return;

  let minVal = Number(min.value);
  let maxVal = Number(max.value);
  if (minVal > maxVal) {
    [minVal, maxVal] = [maxVal, minVal];
    min.value = String(minVal);
    max.value = String(maxVal);
  }

  const range = Number(min.max) - Number(min.min) || 100;
  const minPercent = ((minVal - Number(min.min)) / range) * 100;
  const maxPercent = ((maxVal - Number(max.min)) / range) * 100;

  fill.style.left = `${minPercent}%`;
  fill.style.width = `${maxPercent - minPercent}%`;

  if (minLabel) minLabel.textContent = `${minVal} XAF`;
  if (maxLabel) maxLabel.textContent = `${maxVal} XAF`;
}

document.querySelectorAll(".price-range input[type='range']").forEach((input) => {
  input.addEventListener("input", updatePriceRangeFill);
});

updatePriceRangeFill();

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeFilters();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) closeFilters();
});
