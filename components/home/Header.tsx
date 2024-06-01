import Link from 'next/link';

const Header = () => (
  <header className="site-header">
    <a href="#main-content" className="skip">Skip to main content</a>
    <div className="site-header-desktop">
      <div className="site-header-desktop-secondary">
        <div className="container">
          <div className="row">
            <div className="site-location">
              <a
                href="https://maps.google.com/?cid=17981716346260106472"
                className="site-location__address"
                target="_blank"
                rel="noopener"
                data-bb-track="button"
                data-bb-track-on="click"
                data-bb-track-category="Address"
                data-bb-track-action="Click"
                data-bb-track-label="Header"
              >
                <span>1600 20th St,</span>
                <span> Denver, CO 80202</span>
              </a>
              <a
                className="site-location__tel"
                href="tel:720.769.1414"
                data-bb-track="button"
                data-bb-track-on="click"
                data-bb-track-category="Phone Number"
                data-bb-track-action="Click"
                data-bb-track-label="Header"
              >
                720.769.1414
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="site-header-desktop-primary" data-header-sticky>
        <div className="container">
          <div className="site-logo">
            <Link href="index.html" legacyBehavior>
              <a className="site-logo__btn">
                <img
                  className="site-logo__expanded"
                  src="images/850Logo_primary.png"
                  alt="The Original Denver Home"
                />
                <img
                  className="site-logo__collapsed"
                  src="images/79279logosticky.png"
                  alt="icon"
                />
              </a>
            </Link>
          </div>
          <nav className="site-nav">
            <ul className="site-nav-menu" data-menu-type="desktop">
              <li>
                <Link href="location/the-og-denver/index.html" legacyBehavior>
                  <a className="site-nav-link">Hours & Location</a>
                </Link>
              </li>
              <li>
                <Link href="menus/index.html" legacyBehavior>
                  <a className="site-nav-link">Menus</a>
                </Link>
              </li>
              <li>
                <Link href="our-story/index.html" legacyBehavior>
                  <a className="site-nav-link">Our Story</a>
                </Link>
              </li>
              <li>
                <Link href="happenings/index.html" legacyBehavior>
                  <a className="site-nav-link">Happenings</a>
                </Link>
              </li>
              <li>
                <Link href="private-events/index.html" legacyBehavior>
                  <a className="site-nav-link">Private Events</a>
                </Link>
              </li>
              <li>
                <Link href="online-ordering/index.html" legacyBehavior>
                  <a className="site-nav-link">Order Online</a>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-brand"
                  data-popup="inline"
                  data-popup-src="#popup-reservations-form"
                  tabIndex={0}
                  data-bb-track="button"
                  data-bb-track-on="click"
                  data-bb-track-category="Reservations Trigger Button"
                  data-bb-track-action="Click"
                  data-bb-track-label="Callout, Header"
                >
                  Reservations
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="site-header-mobi" aria-label="Navigation Menu Modal">
      <div className="site-logo">
        <Link href="index.html" legacyBehavior>
          <a className="site-logo__btn">
            <img
              src="images/850Logo_primary.png"
              alt="The Original Denver Home"
            />
            <img
              src="images/79279logosticky.png"
              alt="icon"
            />
          </a>
        </Link>
      </div>
      <div className="site-location">
        <a
          href="https://maps.google.com/?cid=17981716346260106472"
          className="site-location__address"
          target="_blank"
          rel="noopener"
          data-bb-track="button"
          data-bb-track-on="click"
          data-bb-track-category="Address"
          data-bb-track-action="Click"
          data-bb-track-label="Header"
        >
          <span>1600 20th St,</span>
          <span> Denver, CO 80202</span>
        </a>
        <a
          className="site-location__tel"
          href="tel:720.769.1414"
          data-bb-track="button"
          data-bb-track-on="click"
          data-bb-track-category="Phone Number"
          data-bb-track-action="Click"
          data-bb-track-label="Header"
        >
          720.769.1414
        </a>
      </div>
      <button
        type="button"
        className="nav-toggle-btn"
        aria-controls="SiteHeaderMobilePanel"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle Navigation</span>
        <span className="nav-toggle-btn__line"></span>
        <span className="nav-toggle-btn__line"></span>
        <span className="nav-toggle-btn__line"></span>
      </button>
      <div id="SiteHeaderMobilePanel" className="site-header-mobi-panel">
        <div className="site-header-mobi-panel__inner">
          <nav className="site-nav" aria-label="Navigation Menu">
            <ul className="site-nav-menu" data-menu-type="mobile">
              <li>
                <Link href="location/the-og-denver/index.html" legacyBehavior>
                  <a className="site-nav-link">Hours & Location</a>
                </Link>
              </li>
              <li>
                <Link href="menus/index.html" legacyBehavior>
                  <a className="site-nav-link">Menus</a>
                </Link>
              </li>
              <li>
                <Link href="our-story/index.html" legacyBehavior>
                  <a className="site-nav-link">Our Story</a>
                </Link>
              </li>
              <li>
                <Link href="happenings/index.html" legacyBehavior>
                  <a className="site-nav-link">Happenings</a>
                </Link>
              </li>
              <li>
                <Link href="private-events/index.html" legacyBehavior>
                  <a className="site-nav-link">Private Events</a>
                </Link>
              </li>
              <li>
                <Link href="online-ordering/index.html" legacyBehavior>
                  <a className="site-nav-link">Order Online</a>
                </Link>
              </li>
              <li>
                <Link href="https://sagehospitality.jobs/" legacyBehavior>
                  <a
                    className="site-nav-link"
                    target="_blank"
                    rel="noopener"
                  >
                    Careers
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://sagehospitalitygroup.com/restaurant-concepts/srcgiftcards-2/"
                  legacyBehavior
                >
                  <a
                    className="site-nav-link"
                    target="_blank"
                    rel="noopener"
                  >
                    Gift Cards
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://sagehospitalitygroup.com/privacy-policy/"
                  legacyBehavior
                >
                  <a
                    className="site-nav-link"
                    target="_blank"
                    rel="noopener"
                  >
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="press/index.html" legacyBehavior>
                  <a className="site-nav-link">Press</a>
                </Link>
              </li>
              <li>
                <Link href="contact/index.html" legacyBehavior>
                  <a className="site-nav-link">Contact</a>
                </Link>
              </li>
              <li className="site-nav-menu__item">
                <Link
                  href="https://www.sagehospitalitygroup.com/privacy-policy"
                  legacyBehavior
                >
                  <a
                    className="site-nav-menu__btn"
                    target="_blank"
                    rel="noopener"
                  >
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className=""
                  data-popup="inline"
                  data-popup-src="#popup-reservations-form"
                  tabIndex={0}
                  data-bb-track="button"
                  data-bb-track-on="click"
                  data-bb-track-category="Reservations Trigger Button"
                  data-bb-track-action="Click"
                  data-bb-track-label="Callout, Header"
                >
                  Reservations
                </button>
              </li>
              <li>
                <a
                  href="https://signup.e2ma.net/signup/1938343/1927657/"
                  className=""
                  target="_blank"
                  rel="noopener"
                >
                  Email Signup
                </a>
              </li>
            </ul>
          </nav>
          <div className="site-social site-social--bordered">
            <ul className="social-accounts">
              <li>
                <a
                  href="https://www.facebook.com/The-Original-Denver-105642954670591"
                  target="_blank"
                  rel="noopener"
                  data-bb-track="button"
                  data-bb-track-on="click"
                  data-bb-track-category="Social Icons"
                  data-bb-track-action="Click"
                  data-bb-track-label="Facebook, Header"
                >
                  <span className="fa fa-facebook" aria-hidden="true"></span>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/theogdenver/"
                  target="_blank"
                  rel="noopener"
                  data-bb-track="button"
                  data-bb-track-on="click"
                  data-bb-track-category="Social Icons"
                  data-bb-track-action="Click"
                  data-bb-track-label="Instagram, Header"
                >
                  <span className="fa fa-instagram" aria-hidden="true"></span>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="site-location">
            <a
              href="https://maps.google.com/?cid=17981716346260106472"
              className="site-location__address"
              target="_blank"
              rel="noopener"
              data-bb-track="button"
              data-bb-track-on="click"
              data-bb-track-category="Address"
              data-bb-track-action="Click"
              data-bb-track-label="Header"
            >
              <span>1600 20th St,</span>
              <span> Denver, CO 80202</span>
            </a>
            <a
              className="site-location__tel"
              href="tel:720.769.1414"
              data-bb-track="button"
              data-bb-track-on="click"
              data-bb-track-category="Phone Number"
              data-bb-track-action="Click"
              data-bb-track-label="Header"
            >
              720.769.1414
            </a>
          </div>
        </div>
        <div className="site-powered-by">
          <a
            href="https://getbento.com/?utm_source=header&amp;utm_campaign=theogdenver.com"
            target="_blank"
            rel="noopener"
          >
            powered by BentoBox
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
