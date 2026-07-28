const tabs = document.querySelectorAll(".orders-tab");
const cards = document.querySelectorAll(".order-card");
const searchInput = document.querySelector(".orders-search input");

let activeStatus = "all";
let query = "";

function applyFilters() {
  cards.forEach((card) => {
    const status = card.getAttribute("data-status") || "";
    const haystack = (card.getAttribute("data-search") || "").toLowerCase();
    const matchStatus = activeStatus === "all" || status === activeStatus;
    const matchQuery = !query || haystack.includes(query);
    card.hidden = !(matchStatus && matchQuery);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeStatus = tab.getAttribute("data-status") || "all";
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    applyFilters();
  });
});

searchInput?.addEventListener("input", () => {
  query = searchInput.value.trim().toLowerCase();
  applyFilters();
});

applyFilters();
