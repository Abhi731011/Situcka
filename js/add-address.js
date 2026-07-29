const typeButtons = document.querySelectorAll(".add-address-type");
const toggle = document.querySelector(".add-address-toggle");
const form = document.getElementById("add-address-form");
const previewLine1 = document.getElementById("preview-line1");
const previewLine2 = document.getElementById("preview-line2");

const street = document.getElementById("street");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const state = document.getElementById("state");
const country = document.getElementById("country");

function updatePreview() {
  const line1 = street?.value.trim() || "Street address";
  const parts = [city?.value.trim(), zip?.value.trim(), country?.value.trim()].filter(Boolean);
  previewLine1.textContent = line1;
  previewLine2.textContent = parts.join(", ") || "City, postal code, country";
}

typeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    typeButtons.forEach((item) => item.classList.toggle("is-active", item === btn));
  });
});

toggle?.addEventListener("click", () => {
  const on = !toggle.classList.contains("is-on");
  toggle.classList.toggle("is-on", on);
  toggle.setAttribute("aria-checked", String(on));
});

[street, city, zip, state, country].forEach((el) => {
  el?.addEventListener("input", updatePreview);
  el?.addEventListener("change", updatePreview);
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "./addresses.html";
});

updatePreview();
