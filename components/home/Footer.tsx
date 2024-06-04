import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="site-footer-desktop site-footer-desktop--show">
        <div className="site-footer-desktop-primary w-full">
          <div className="site-footer-desktop-primary__container container">
            <ul className="social-accounts w-full">
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
                  aria-describedby="audioeye_new_window_message"
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
                  aria-describedby="audioeye_new_window_message"
                >
                  <span className="fa fa-instagram" aria-hidden="true"></span>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
            <nav className="site-nav w-full" aria-label="Footer">
              <ul className="site-nav-menu">
                {/* <li>
                  <a
                    className="site-nav-link"
                    href="https://sagehospitality.jobs/"
                    target="_blank"
                    rel="noopener"
                    aria-describedby="audioeye_new_window_message"
                  >
                    Careers
                  </a>
                </li> */}
                {/* <li>
                  <a
                    className="site-nav-link"
                    href="https://sagehospitalitygroup.com/restaurant-concepts/srcgiftcards-2/"
                    target="_blank"
                    rel="noopener"
                    aria-describedby="audioeye_new_window_message"
                  >
                    Gift Cards
                  </a>
                </li> */}
                <li>
                  <a
                    className="site-nav-link"
                    href="https://sagehospitalitygroup.com/privacy-policy/"
                    target="_blank"
                    rel="noopener"
                    aria-describedby="audioeye_new_window_message"
                  >
                    Privacy Policy
                  </a>
                </li>
                {/* <li>
                  <a className="site-nav-link" href="/press/">
                    Press
                  </a>
                </li> */}
                <li>
                  <a className="site-nav-link" href="/contact/">
                    Contact
                  </a>
                </li>
                {/* <li className="site-nav-menu__item">
                  <a
                    className="site-nav-menu__btn"
                    href="https://www.sagehospitalitygroup.com/privacy-policy"
                    target="_blank"
                    rel="noopener"
                    aria-describedby="audioeye_new_window_message"
                  >
                    Privacy Policy
                  </a>
                </li> */}
                {/* <li>
                  <a
                    className="site-nav-link"
                    href="https://www.sagehospitalitygroup.com/privacy-policy"
                    target="_blank"
                    rel="noopener"
                    aria-describedby="audioeye_new_window_message"
                  >
                    Privacy Policy
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="https://signup.e2ma.net/signup/1938343/1927657/"
                    className="btn btn-brand"
                    target="_blank"
                    rel="noopener"
                    aria-describedby="audioeye_new_window_message"
                  >
                    Email Signup
                  </a>
                </li> */}
              </ul>
            </nav>

          </div>
        </div>
        <div className="site-footer-desktop-secondary">
          <div className="site-powered-by">
            {/* <a
              href="https://getbento.com/?utm_source=footer&amp;utm_campaign=theogdenver.com"
              target="_blank"
              rel="noopener"
              aria-describedby="audioeye_new_window_message"
            >
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
