import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="site-content__main page-id--614005">
      <span id="main-content" className="sr-only">
        Main content starts here, tab to start navigating
      </span>

      <section
        id="hero"
        aria-label="hero-section"
        className="hero hero--gallery hero--scrollable revealable revealed"
        style={{ height: '271.15px' }}
      >
        <div className="hero__content container">
          <h1>What's Going On?</h1>
        </div>
        <button type="button" className="hero__scroll-btn arrow-btn arrow-btn--down">
          <span className="sr-only">Scroll Down to Content</span>
        </button>
        <div className="gallery gallery--fit gallery--dimmed slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: '1282px' }}>
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{
                  width: '1282px',
                  position: 'relative',
                  left: 0,
                  top: 0,
                  zIndex: 999,
                  opacity: 1,
                }}
              >
                <div
                  className="gallery__item gallery__item-fallback"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/616930305-From-the-Hip-Photo_1.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="audioeye_live_message" className="ae-compliance-indent" aria-live="polite" role="region"></div>
      </section>

      <section id="intro" className="content c-intro container-sm revealable revealed">
        <p>
          <span style={{ fontSize: '24px' }}>Find out what's happening at The OG.</span>
        </p>
      </section>

      <section className="content container">
        <ul className="card-listing row" data-paginator-id="events">
          <li className="card col-md-6 card--cols-two revealable revealed">
            <a className="card__btn" href="/happenings/brunching-for-change/">
              <div className="card__media">
                <div
                  className="card__image image-thumbnail"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/637800256-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="" />
                </div>
              </div>
              <h2 className="card__heading" role="presentation">
                Brunching for Change
              </h2>
            </a>
          </li>

          <li className="card col-md-6 card--cols-two revealable revealed">
            <a className="card__btn" href="/happenings/brunch-proud-june-specials/">
              <div className="card__media">
                <div
                  className="card__image image-thumbnail"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/47321Web_Header.png?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="" />
                </div>
              </div>
              <h2 className="card__heading" role="presentation">
                Brunch Proud
              </h2>
            </a>
          </li>

          <li className="card col-md-6 card--cols-two revealable">
            <a className="card__btn" href="/happenings/pajama-brunch/">
              <div className="card__media">
                <div
                  className="card__image image-thumbnail"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/71204Web_Header.png?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="" />
                </div>
              </div>
              <h2 className="card__heading" role="presentation">
                Pajama Brunch
              </h2>
            </a>
          </li>

          <li className="card col-md-6 card--cols-two revealable">
            <a className="card__btn" href="/happenings/the-denver-dugout/">
              <div className="card__media">
                <div
                  className="card__image image-thumbnail"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/13421Web_Header_5.png?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="" />
                </div>
              </div>
              <h2 className="card__heading" role="presentation">
                The Denver Dugout
              </h2>
            </a>
          </li>

          <li className="card col-md-6 card--cols-two revealable">
            <a className="card__btn" href="/happenings/eat-drink-support-local/">
              <div className="card__media">
                <div
                  className="card__image image-thumbnail"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/528090149-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="" />
                </div>
              </div>
              <h2 className="card__heading" role="presentation">
                Eat, Drink & Support Local
              </h2>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
