import React from 'react';

const PajamaBrunch: React.FC = () => {
  return (
    <article className="article content">
      <div className="container revealable revealed">
        <h1>Pajama Brunch</h1>
        <p>
          <strong>June 08, 2024</strong>
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
                  aria-label="a little girl brushing her hair"
                  className="gallery__item gallery__item-fallback"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/71204Web_Header.png?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="a little girl brushing her hair" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-md revealable">
        <p>
          Slip into the coziest affair of the season at <strong>The Original's Pajama Brunch*</strong> extravaganza! Join us for a morning of comfort and indulgence, where delicious bites and stylish loungewear collide.&nbsp;
        </p>
        <p>
          In celebration, we'll be serving up a special <strong>Cereal Collection</strong> featuring all of your childhood favorites. Plus, a modern twist on this blast-from-the-past: <strong>Clarified Cereal Milk Punch</strong>. And yes, she packs a PUNCH. &nbsp;
        </p>
        <p>Set your alarm, roll right out of bed and into brunch, no need for an outfit change!</p>
        <p>
          <strong>
            Saturday, June 8, 2024
            <br />
            7AM-3PM
          </strong>
        </p>
        <p></p>
        <p>
          <em>
            * Remember, we are still brunching here! Please ensure that your PJ's are restaurant appropriate.&nbsp;
          </em>
        </p>
        <a
          className="btn btn-brand"
          href="https://www.opentable.com/booking/experiences-availability?rid=1164199&amp;restref=1164199&amp;experienceId=310812&amp;utm_source=external&amp;utm_medium=referral&amp;utm_campaign=shared"
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

export default PajamaBrunch;
