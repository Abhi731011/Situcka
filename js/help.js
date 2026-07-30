const searchInput = document.getElementById("help-search-input");
const cards = [...document.querySelectorAll(".help-card")];

function filterCards(query) {
  const q = query.trim().toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector("strong")?.textContent?.toLowerCase() || "";
    const desc = card.querySelector("p")?.textContent?.toLowerCase() || "";
    const keywords = card.getAttribute("data-keywords") || "";
    const haystack = `${title} ${desc} ${keywords}`;
    const match = !q || haystack.includes(q);
    card.hidden = !match;
  });
}

searchInput?.addEventListener("input", () => {
  filterCards(searchInput.value);
});
