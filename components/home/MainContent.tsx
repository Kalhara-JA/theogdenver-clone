'use client'

import Link from 'next/link';
import HeaderSecondary from '../common/HeaderSecondary';
import useWindowSizeAndScroll from '@/hooks/useWindowSizeAndScroll';
import ScrollToSection from '@/hooks/scrollToSection';

const MainContent = () => {

  const { isScrolled } = useWindowSizeAndScroll();

  return (
    <div className="site-content">
      <div className="site-header-spacer-desktop" aria-hidden="true" style={{ height: isScrolled ? '150.875px' : '70px' }}></div>
      <div className="site-header-spacer-mobile" aria-hidden="true" style={{ height: '92.475px' }}></div>
      <main className="site-content__main page-id--614001">
        <h1 className="sr-only">Home</h1>
        <span id="main-content" className="sr-only">
          Main content starts here, tab to start navigating
        </span>
        <section
          id="hero"
          aria-label="hero-section"
          className="hero hero--scrollable hero--fullheight revealable revealed"
          style={{ backgroundColor: '#f5f3ec' }}
        >
          <div className="hero__content container">
            <p>
              {/* <img
                src="images/850Logo_primary7c0c.png?w=1000&fit=max&auto=compress,format&h=1000"
                className="fr-fic fr-dib mx-auto"
                alt="logo, icon"
                style={{ width: '525px' }}
                data-alt_text="logo"
              /> */}
              <img
                src="logos/logo_primary_new.png?w=1000&fit=max&auto=compress,format&h=1000"
                className="fr-fic fr-dib mx-auto"
                alt="logo, icon"
                style={{ width: '525px' }}
                data-alt_text="logo"
              />
            </p>
            <p>
              <br />
            </p>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ width: '33.3333%' }}>
                    <h3>Comforts</h3>
                  </td>
                  <td style={{ width: '33.3333%' }}>
                    <h3>Classics</h3>
                  </td>
                  <td style={{ width: '33.3333%' }}>
                    <h3>Curiosities</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="button" onClick={() => ScrollToSection('homeMenuSec')} className="hero__scroll-btn arrow-btn arrow-btn--down">
            <span className="sr-only">Scroll Down to Content</span>
          </button>
        </section>
        <div className="c-embed revealable">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WNH76ZF"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        </div>
        <section id='homeMenuSec' className="c-split c-split--vcenter revealable">
          <div className="c-split__col c-split__col--empty">
            <div className="c-split__col-inner">
              <div
                className="c-split__image"
                role="img"
                aria-label="a woman sitting at a table with a plate of food"
                style={{
                  backgroundImage:
                    "url('images/36130341-From-the-Hip-Photo388a.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                  backgroundPosition: '50.0% 50.0%',
                }}
              ></div>
            </div>
          </div>
          <div className="c-split__col ">
            <div className="c-split__col-inner">
              <div className="c-split__content content">
                <h2 className="h2 c-split__heading">Our Menus</h2>
                <p>
                  The OG is where culinary innovation meets the timeless charm of breakfast and lunch
                  classics. Our menu, a treasure trove of gourmet pancakes, artisanal breakfast cocktails,
                  and the best mimosas in Denver, promises an unrivaled dining experience.
                </p>
                <p>
                  Savor the flavors of Denver from decadent French toast to savory benedicts, each dish at
                  The OG is crafted to perfection, making us the go-to spot for weekend brunch in Denver.
                  Whether you&#39;re indulging in a family-friendly brunch or seeking the perfect brunch
                  spot for a lazy Sunday, The OG&#39;s unique menu caters to all.
                </p>
                <Link href="menus/index.html" legacyBehavior>
                  <a className="btn btn-brand" target="_parent">
                    View Menus
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="c-featured--news content container">
          <ul className="card-listing row">
            <li className="card col-md-6 col-lg-4 card--cols-three revealable">
              <Link href="news-item/og/index.html" legacyBehavior>
                <a className="card__btn">
                  <h3 className="h2 card__heading">The Time and The Place</h3>
                </a>
              </Link>
            </li>
            <li className="card col-md-6 col-lg-4 card--cols-three revealable">
              <Link href="news-item/about/index.html" legacyBehavior>
                <a className="card__btn">
                  <h3 className="h2 card__heading">Did we just become best friends?</h3>
                </a>
              </Link>
            </li>
            <li className="card col-md-6 col-lg-4 card--cols-three revealable">
              <Link href="news-item/private-events/index.html" legacyBehavior>
                <a className="card__btn">
                  <h3 className="h2 card__heading">Hey Party People!</h3>
                </a>
              </Link>
            </li>
          </ul>
        </aside>
        <section className="c-one-col--text content container revealable">
          <p>
            <span style={{ fontSize: '24px' }}>
              Welcome to The OG, nestled in the vibrant heart of McGregor Square, a stone&#39;s throw away
              from the iconic Coors Field. As one of Denver&#39;s top brunch destinations we&#39;re delighted
              to offer a unique twist on the classics and innovative dishes, perfectly paired with our
              signature mimosas and local coffee.
            </span>
          </p>
        </section>
        <section className="c-split c-split--vcenter c-split--alternate revealable">
          <div className="c-split__col c-split__col--empty">
            <div className="c-split__col-inner">
              <div
                className="c-split__image"
                role="img"
                aria-label="a store front at day"
                style={{
                  backgroundImage:
                    "url('images/528090149-From-the-Hip-Photo388a.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                  backgroundPosition: '50.0% 50.0%',
                }}
              ></div>
            </div>
          </div>
          <div className="c-split__col ">
            <div className="c-split__col-inner">
              <div className="c-split__content content">
                <h2 className="h2 c-split__heading">Happenings</h2>
                <p>
                  Stay tuned to our website and social media for the latest happenings and exclusive events
                  at The OG, the heart of Denver&#39;s dynamic brunch and dining scene. Indulge in our
                  themed brunches, relish our monthly specials, and join us in giving back to the
                  community. There’s always something new and exciting to look forward to.
                </p>
                <p>
                  Whether you’re a local foodie or a visitor exploring the wonders of Denver, our doors are
                  always open, inviting you to a place where every brunch is not just a meal, but an OG
                  experience.
                </p>
                <p>
                  Don’t miss out – book your table today and follow us on Instagram for daily inspirations
                  and surprises!
                </p>
                <Link href="happenings/index.html" legacyBehavior>
                  <a className="btn btn-brand" target="_parent">
                    View Happenings
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="c-tout-overlay revealable revealed"
          style={{
            backgroundImage: 'url("https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/900500268-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5")',
            backgroundPosition: '50% 50%',
            height: '0px',
          }}
        >
        </section>
        <section className="c-one-col--text content container revealable">
          <h2>
            Follow us
            <br />
            <small>
              <a
                href="https://www.instagram.com/theogdenver/"
                rel="noopener noreferrer"
                target="_blank"
              >
                @strewth
              </a>
            </small>
          </h2>
          <p>
            <img
              src="images/63492heroh1_full7c0c.png?w=1000&fit=max&auto=compress,format&h=1000"
              data-alt_text="icon"
              className="fr-fic fr-dib mx-auto"
              alt="icon"
              style={{ width: '114px' }}
            />
          </p>
        </section>
      </main>
      <aside className="hospitality revealable">
        <ul className="hospitality__list">
          <li className="hospitality__item">
            <a
              href="https://www.sagehospitality.com/restaurant-concepts/"
              target="_blank"
              rel="noopener"
            >
              <img
                src="images/22322Hosp_logoea15.png?w=1200&fit=max&auto=compress,format|resize(786)"
                className="False"
                loading="lazy"
                alt="logo"
                style={{ objectPosition: 'none' }}
              />
            </a>
          </li>
        </ul>
      </aside>
      {/* <aside className="mobi-footer mobi-footer--sticky">
        <ul className="mobi-footer__list">
          <li className="mobi-footer__item">
            <button
              type="button"
              className="btn btn-brand btn-block"
              data-popup="inline"
              data-popup-src="#popup-reservations-form"
              tabIndex={0}
              data-bb-track="button"
              data-bb-track-on="click"
              data-bb-track-category="Reservations Trigger Button"
              data-bb-track-action="Click"
              data-bb-track-label="Callout, Footer"
            >
              Reservations
            </button>
          </li>
        </ul>
      </aside> */}
    </div >
  );

}

export default MainContent;
