const searchInput = document.querySelector(".addresses-search input");
const cards = document.querySelectorAll(".address-card");

searchInput?.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  cards.forEach((card) => {
    const haystack = (card.getAttribute("data-search") || "").toLowerCase();
    card.hidden = Boolean(query) && !haystack.includes(query);
  });
});

document.querySelectorAll(".address-card__btn--default").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".address-card").forEach((card) => {
      card.classList.remove("is-default");
      const badge = card.querySelector(".address-card__badge");
      badge?.remove();
      card.querySelector(".address-card__btn--default")?.classList.remove("is-active");
    });

    const card = btn.closest(".address-card");
    card?.classList.add("is-default");
    btn.classList.add("is-active");

    const title = card?.querySelector(".address-card__info h3");
    if (title && !title.querySelector(".address-card__badge")) {
      const badge = document.createElement("span");
      badge.className = "address-card__badge";
      badge.textContent = "DEFAULT";
      title.appendChild(document.createTextNode(" "));
      title.appendChild(badge);
    }

    const defaultLabel = document.querySelector(".addresses-summary li:nth-child(2) strong");
    if (defaultLabel && title) {
      const name = Array.from(title.childNodes)
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent.trim())
        .join(" ")
        .trim();
      defaultLabel.textContent = name || "Home";
    }
  });
});
