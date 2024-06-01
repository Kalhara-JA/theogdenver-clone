import React from 'react';

const ArticleContent: React.FC = () => {
  return (
    <article className="article content">
      <div className="container revealable revealed">
        <h1>Brunching for Change</h1>
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
                  aria-label="a person sitting at a table with a plate of food"
                  className="gallery__item gallery__item-fallback"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/637800256-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="a person sitting at a table with a plate of food" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-md revealable revealed">
        <p>
          At The OG, we believe that together we can create positive change. Join us in support of
          that positive change on the <em>last Monday of each month</em> when we will{' '}
          <strong>donate 10% of our sales to support&nbsp;</strong>
          <a
            href="https://www.nokidhungry.org/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            <strong>No Kid Hungry</strong>
          </a>{' '}
          in their mission to fight child hunger and uplift lives.
        </p>
        <p>With every bite you savor, you'll be making a difference in the lives of others.</p>
        <p>
          Share the love, tell your friends, order that extra side of bacon and come brunch for
          change at The OG.&nbsp;
        </p>
        <p style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '14px' }}>
            <strong>Dates:</strong>
          </span>
          <br />
          <span style={{ fontSize: '14px' }}>
            <strong>May 27th</strong>
          </span>
          <br />
          <span style={{ fontSize: '14px' }}>
            <strong>June 24th</strong>
          </span>
        </p>
        <a
          className="btn btn-brand"
          href="https://www.opentable.com/booking/experiences-availability?rid=1164199&amp;restref=1164199&amp;experienceId=297549&amp;utm_source=external&amp;utm_medium=referral&amp;utm_campaign=shared"
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

export default ArticleContent;
