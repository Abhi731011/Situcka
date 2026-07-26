const headerActions = [
  { label: "Notifications", icon: "notification.svg", count: 3 },
  { label: "Messages", icon: "message.svg", count: 1 },
  { label: "Cart", icon: "cart.svg", count: 4 },
];

class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="app-header">
        <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>

        <a class="header-brand" href="./dashboard.html" aria-label="SITÙCKA home">
          <img src="./assets/logo-basket.svg" alt="SITÙCKA" />
        </a>

        <button class="delivery-selector" type="button" aria-label="Change delivery location">
          <img src="./assets/Header/location.svg" alt="" aria-hidden="true" />
          <span class="delivery-copy">
            <small>Deliver to:</small>
            <strong>Downtown, NY 10012</strong>
          </span>
          <svg class="chevron" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m7 10 5 5 5-5" />
          </svg>
        </button>

        <form class="header-search" role="search">
          <input type="search" aria-label="Search" placeholder="Search restaurants, groceries..." />
          <button type="submit" aria-label="Submit search">
            <img src="./assets/Header/search.svg" alt="" aria-hidden="true" />
          </button>
        </form>

        <div class="header-actions" aria-label="Quick actions">
          ${headerActions
            .map(
              ({ label, icon, count }) => `
                <button class="header-action" type="button" aria-label="${label}">
                  <img src="./assets/Header/${icon}" alt="" aria-hidden="true" />
                  <span>${count}</span>
                </button>
              `,
            )
            .join("")}
        </div>

        <button class="profile-menu" type="button" aria-label="Open profile menu">
          <span class="profile-avatar">
            <span class="profile-fallback">JD</span>
            <img src="./assets/Header/img.jpg" alt="John Doe" />
          </span>
          <span class="profile-copy">
            <strong>John Doe</strong>
            <small>Member since 2022</small>
          </span>
          <svg class="chevron" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m7 10 5 5 5-5" />
          </svg>
        </button>
      </header>
    `;

    const avatar = this.querySelector(".profile-avatar img");
    avatar?.addEventListener("error", () => avatar.classList.add("is-missing"));

    const menuButton = this.querySelector(".menu-button");
    menuButton?.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("sidebar-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    this.querySelector(".header-search")?.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
}

customElements.define("app-header", AppHeader);
