const catLinks = document.querySelectorAll(".menu-cats__item");
const sections = document.querySelectorAll(".menu-section");

catLinks.forEach((link) => {
  link.addEventListener("click", () => {
    catLinks.forEach((item) => item.classList.remove("is-active"));
    link.classList.add("is-active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      catLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("data-cat") === id);
      });
    });
  },
  { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
);

sections.forEach((section) => observer.observe(section));

document.querySelectorAll(".menu-order__qty").forEach((wrap) => {
  const valueEl = wrap.querySelector("span");
  const buttons = wrap.querySelectorAll("button");

  buttons[0]?.addEventListener("click", () => {
    const next = Math.max(1, Number(wrap.dataset.qty || 1) - 1);
    wrap.dataset.qty = String(next);
    if (valueEl) valueEl.textContent = String(next);
  });

  buttons[1]?.addEventListener("click", () => {
    const next = Number(wrap.dataset.qty || 1) + 1;
    wrap.dataset.qty = String(next);
    if (valueEl) valueEl.textContent = String(next);
  });
});

document.querySelectorAll(".menu-order__remove").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".menu-order__item")?.remove();
  });
});

document.querySelector(".menu-order__clear")?.addEventListener("click", () => {
  document.querySelector(".menu-order__list")?.replaceChildren();
});
