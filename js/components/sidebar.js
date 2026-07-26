const primaryItems = [
  { key: "home", label: "Home", icon: "Home.svg", href: "./dashboard.html" },
  {
    key: "restaurants",
    label: "Restaurants",
    icon: "Resturant.svg",
    href: "./restaurants.html",
  },
  { key: "groceries", label: "Groceries", icon: "Groseries.svg", href: "./groceries.html" },

  { key: "parcel", label: "Parcel", icon: "Parcel.svg", href: "./parcel.html" },
];

const exploreItems = [
  { key: "offers", label: "Offers", icon: "offer.svg", href: "#" },
  { key: "orders", label: "Orders", icon: "order.svg", href: "#" },
  { key: "wishlist", label: "Wishlist", icon: "wishlist.svg", href: "#" },
  { key: "addresses", label: "Addresses", icon: "Address.svg", href: "#" },
  { key: "payments", label: "Payments", icon: "Payment.svg", href: "#" },
  { key: "help", label: "Help & Support", icon: "Help.svg", href: "#" },
  { key: "settings", label: "Settings", icon: "Setting.svg", href: "#" },
];

function getActiveKey(host) {
  const fromAttr = (host.getAttribute("active") || "").trim().toLowerCase();
  if (fromAttr) return fromAttr;

  const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
  const file = decodeURIComponent(path.split("/").filter(Boolean).pop() || "");

  if (!file || file === "index.html") return "home";
  if (file.includes("restaurant")) return "restaurants";
  if (file.includes("dashboard") || file.includes("home")) return "home";
  if (file.includes("grocer")) return "groceries";
  if (file.includes("parcel")) return "parcel";
  return "home";
}

function createNavItem(item, activeKey) {
  const active = item.key === activeKey;
  return `
    <a class="sidebar-link${active ? " is-active" : ""}" href="${item.href}" ${
      active ? 'aria-current="page"' : ""
    }>
      <img src="./assets/Tab/${item.icon}" alt="" aria-hidden="true" />
      <span>${item.label}</span>
    </a>
  `;
}

class AppSidebar extends HTMLElement {
  connectedCallback() {
    const activeKey = getActiveKey(this);

    this.innerHTML = `
      <aside class="app-sidebar" aria-label="Main sidebar">
        <div class="sidebar-brand">
          <a href="./dashboard.html" aria-label="SITÙCKA home">
            <img src="./assets/logo-basket.svg" alt="SITÙCKA" />
          </a>
          <button class="sidebar-close" type="button" aria-label="Close menu">
            <span></span><span></span>
          </button>
        </div>

        <nav class="sidebar-nav" aria-label="Dashboard navigation">
          <div class="sidebar-nav-group">
            ${primaryItems.map((item) => createNavItem(item, activeKey)).join("")}
          </div>
          <p class="sidebar-label">Explore</p>
          <div class="sidebar-nav-group">
            ${exploreItems.map((item) => createNavItem(item, activeKey)).join("")}
          </div>
        </nav>

        <section class="assistant-card" aria-labelledby="assistant-title">
          <div>
            <h2 id="assistant-title">AI Assistant</h2>
            <p>Smart shopping made simple</p>
          </div>
          <img src="./assets/Tab/bot.svg" alt="SITÙCKA AI assistant" />
          <button type="button">Start Chat</button>
        </section>
      </aside>
    `;

    this.querySelector(".sidebar-close")?.addEventListener("click", () => {
      document.body.classList.remove("sidebar-open");
    });
  }
}

customElements.define("app-sidebar", AppSidebar);
