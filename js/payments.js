const tabs = document.querySelectorAll(".payments-tab");
const panels = document.querySelectorAll(".payments-list");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.getAttribute("data-tab");

    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.getAttribute("data-panel") !== key;
    });
  });
});
