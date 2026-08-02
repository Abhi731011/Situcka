class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer__inner">
          <div class="site-footer__brand">
            <a class="site-footer__logo" href="./dashboard.html" aria-label="SITÙCKA home">SITÙCKA</a>
            <p>
              SITÙCKA is reshaping urban logistics by connecting people to everything in their city.
              Experience the fastest on-demand service.
            </p>
            <div class="site-footer__social">
              <a href="#" aria-label="Language">
                <img src="./assets/world.svg" alt="" />
              </a>
              <a href="#" aria-label="Promotions">
                <img src="./assets/promation.svg" alt="" />
              </a>
              <a href="mailto:support@stucka.com" aria-label="Email">
                <img src="./assets/mail%202.svg" alt="" />
              </a>
            </div>
          </div>

          <div class="site-footer__col">
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press Kit</a>
            <a href="#">Sustainability</a>
          </div>

          <div class="site-footer__col">
            <h3>Services</h3>
            <a href="./restaurants.html">Food Delivery</a>
            <a href="./groceries.html">Groceries</a>
            <a href="./parcel.html">Courier Service</a>
            <a href="./payments.html">Payment Portal</a>
            <a href="./rider.html">Rider Network</a>
          </div>

          <div class="site-footer__col site-footer__contact">
            <h3>Support &amp; Contact</h3>
            <p>
              <span class="site-footer__icon" aria-hidden="true">
                <img src="./assets/call.svg" alt="" />
              </span>
              <a href="tel:+34123456789">+34 123 456 789</a>
            </p>
            <p>
              <span class="site-footer__icon" aria-hidden="true">
                <img src="./assets/@.svg" alt="" />
              </span>
              <a href="mailto:support@stucka.com">support@stucka.com</a>
            </p>
            <p>
              <span class="site-footer__icon" aria-hidden="true">
                <img src="./assets/address.svg" alt="" />
              </span>
              <span>Calle de la Princesa, Madrid, Spain</span>
            </p>
          </div>
        </div>

        <div class="site-footer__bottom">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);
