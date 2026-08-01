const darkToggle = document.querySelector(".settings-toggle");
const passwordModal = document.getElementById("password-modal");
const openPasswordBtn = document.querySelector("[data-open-password-modal]");
const closePasswordBtns = document.querySelectorAll("[data-close-password-modal]");

darkToggle?.addEventListener("click", () => {
  const enabled = darkToggle.getAttribute("aria-checked") === "true";
  darkToggle.setAttribute("aria-checked", String(!enabled));
  darkToggle.classList.toggle("is-on", !enabled);
});

function openPasswordModal() {
  if (!passwordModal) return;
  passwordModal.hidden = false;
  document.body.classList.add("password-modal-open");
}

function closePasswordModal() {
  if (!passwordModal) return;
  passwordModal.hidden = true;
  document.body.classList.remove("password-modal-open");
}

openPasswordBtn?.addEventListener("click", openPasswordModal);

closePasswordBtns.forEach((btn) => {
  btn.addEventListener("click", closePasswordModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && passwordModal && !passwordModal.hidden) {
    closePasswordModal();
  }
});

document.querySelectorAll(".password-field__toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.parentElement?.querySelector("input");
    if (!input) return;
    const showing = input.type === "text";
    input.type = showing ? "password" : "text";
    btn.setAttribute("aria-label", showing ? "Show password" : "Hide password");
  });
});

document.getElementById("password-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  closePasswordModal();
});

const dropdowns = [...document.querySelectorAll("[data-dropdown]")];

function closeAllDropdowns(except) {
  dropdowns.forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove("is-open");
    const trigger = dropdown.querySelector(".settings-select");
    const menu = dropdown.querySelector(".settings-dropdown__menu");
    trigger?.setAttribute("aria-expanded", "false");
    if (menu) menu.hidden = true;
  });
}

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".settings-select");
  const valueEl = dropdown.querySelector(".settings-select__value");
  const menu = dropdown.querySelector(".settings-dropdown__menu");
  const options = [...dropdown.querySelectorAll("[role='option']")];

  trigger?.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.contains("is-open");
    closeAllDropdowns();
    if (isOpen) return;

    dropdown.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    if (menu) menu.hidden = false;
  });

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation();
      const value = option.getAttribute("data-value") || option.textContent?.trim() || "";
      if (valueEl) valueEl.textContent = value;
      options.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
      closeAllDropdowns();
    });
  });
});

document.addEventListener("click", () => closeAllDropdowns());

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllDropdowns();
});
