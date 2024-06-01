import React from 'react';

const BrunchProud: React.FC = () => {
  return (
    <article className="article content">
      <div className="container revealable revealed">
        <h1>Brunch Proud</h1>
        <p>
          <strong>June 01, 2024 until June 30, 2024</strong>
        </p>
      </div>

      <section className="container-md revealable revealed">
        <div className="gallery gallery--std slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div className="slick-track" style={{ opacity: 1, width: '727px' }}>
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{
                  width: '727px',
                  position: 'relative',
                  left: 0,
                  top: 0,
                  zIndex: 999,
                  opacity: 1,
                }}
              >
                <div
                  role="img"
                  aria-label="a close up of a woman"
                  className="gallery__item gallery__item-fallback"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/47321Web_Header.png?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="a close up of a woman" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-md revealable">
        <p>Love wins when you brunch at The OG this June.</p>
        <p>
          $1 from every special menu item ordered will be donated to our friends at{' '}
          <a
            href="https://lgbtqcolorado.org/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            <strong>The Center on Colfax</strong>
          </a>
          , Colorado's largest LGBTQ community center.
        </p>
        <p>
          <strong>Available June 1st - June 30th, 2024</strong>
        </p>
        <p></p>
        <h2>
          <strong>BRUNCH PROUD</strong>
          <br />
        </h2>
        <p>
          <strong>BBQ BRUISKET BURGER</strong>
          <br />
          Bacon, BBQ, Haystack Onions
          <br />
          <strong>21</strong>
        </p>
        <p>
          <strong>STRAWBERRY SHORTCAKE</strong>
          <br />
          House-made Pound Cake, Berries and Strawberry Coulis
          <br />
          <strong>12</strong>
        </p>
        <p>
          <strong>PRICKLY PINK</strong>
          <br />
          Tequila, Margarita Mix, Prickly Pear
          <br />
          Spicy or Not Spicy
          <br />
          <strong>12</strong>
        </p>
        <p></p>
        <p></p>
        <a
          className="btn btn-brand"
          href="https://www.opentable.com/booking/experiences-availability?rid=1164199&amp;restref=1164199&amp;experienceId=306935&amp;utm_source=external&amp;utm_medium=referral&amp;utm_campaign=shared"
          target="_blank"
          rel="noopener"
          aria-describedby="audioeye_new_window_message"
        >
          Reserve a Table!
        </a>
      </div>
    </article>
  );
};

export default BrunchProud;
