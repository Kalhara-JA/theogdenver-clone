import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="site-footer-desktop">
      <div className="site-footer-desktop-primary">
        <div className="site-footer-desktop-primary__container container">
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
                data-bb-track-label="Facebook, Footer"
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
                data-bb-track-label="Instagram, Footer"
              >
                <span className="fa fa-instagram" aria-hidden="true"></span>
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
          <nav className="site-nav">
            <ul className="site-nav-menu">
              <li>
                <Link href="https://sagehospitality.jobs/" legacyBehavior>
                  <a className="site-nav-link" target="_blank" rel="noopener">
                    Careers
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://sagehospitalitygroup.com/restaurant-concepts/srcgiftcards-2/"
                  legacyBehavior
                >
                  <a className="site-nav-link" target="_blank" rel="noopener">
                    Gift Cards
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://sagehospitalitygroup.com/privacy-policy/"
                  legacyBehavior
                >
                  <a className="site-nav-link" target="_blank" rel="noopener">
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
                <Link
                  href="https://www.sagehospitalitygroup.com/privacy-policy"
                  legacyBehavior
                >
                  <a className="site-nav-link" target="_blank" rel="noopener">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="https://signup.e2ma.net/signup/1938343/1927657/"
                  className="btn btn-brand"
                  target="_blank"
                  rel="noopener"
                >
                  Email Signup
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="site-footer-desktop-secondary">
        <div className="site-powered-by">
          <a
            href="https://getbento.com/?utm_source=footer&amp;utm_campaign=theogdenver.com"
            target="_blank"
            rel="noopener"
          >
            powered by BentoBox
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
