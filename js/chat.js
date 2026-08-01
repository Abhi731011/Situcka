const tabs = [...document.querySelectorAll(".chat-tab")];
const items = [...document.querySelectorAll(".chat-item")];
const searchInput = document.getElementById("chat-search");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatThread = document.getElementById("chat-thread");
const quickReplies = [...document.querySelectorAll(".chat-quick button")];
const backBtn = document.querySelector("[data-chat-back]");

function setActiveChat(btn) {
  items.forEach((item) => item.classList.remove("is-active"));
  btn?.classList.add("is-active");
  document.body.classList.add("chat-open");
}

function filterChats() {
  const activeTab = document.querySelector(".chat-tab.is-active")?.dataset.filter || "all";
  const query = (searchInput?.value || "").trim().toLowerCase();

  items.forEach((item) => {
    const filter = item.dataset.filter || "";
    const text = item.textContent?.toLowerCase() || "";
    const tabMatch = activeTab === "all" || filter === activeTab;
    const searchMatch = !query || text.includes(query);
    item.closest("li").hidden = !(tabMatch && searchMatch);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("is-active"));
    tab.classList.add("is-active");
    filterChats();
  });
});

items.forEach((item) => {
  item.addEventListener("click", () => setActiveChat(item));
});

document.querySelector(".chat-ai")?.addEventListener("click", () => {
  items.forEach((item) => item.classList.remove("is-active"));
  document.body.classList.add("chat-open");
});

backBtn?.addEventListener("click", () => {
  document.body.classList.remove("chat-open");
});

searchInput?.addEventListener("input", filterChats);

function appendOutgoing(text) {
  if (!chatThread || !text.trim()) return;

  const wrap = document.createElement("div");
  wrap.className = "chat-msg chat-msg--out";
  wrap.innerHTML = `
    <div class="chat-bubble"></div>
    <span class="chat-msg__meta">
      Just now
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12 4 4 8-10M10 16l2 2 8-10" /></svg>
    </span>
  `;
  wrap.querySelector(".chat-bubble").textContent = text.trim();
  chatThread.appendChild(wrap);
  chatThread.scrollTop = chatThread.scrollHeight;
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  appendOutgoing(chatInput.value);
  chatInput.value = "";
});

quickReplies.forEach((btn) => {
  btn.addEventListener("click", () => appendOutgoing(btn.textContent || ""));
});
