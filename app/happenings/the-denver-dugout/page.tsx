import React from 'react';

const DenverDugout: React.FC = () => {
  return (
    <article className="article content">
      <div className="container revealable revealed">
        <h1>The Denver Dugout</h1>
      </div>

      <section className="container-md revealable revealed">
        <div className="gallery gallery--std slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{ opacity: 1, width: '727px' }}
            >
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
                  className="gallery__item gallery__item-fallback"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/13421Web_Header_5.png?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-md revealable">
        <p>*psst* There's a secret (not so secret) book of treats floating around LoDo!</p>
        <p>Pick one up at any participating restaurant and score a summer of savings this Rockies Season.</p>
        <p>
          <a
            href="https://www.callmepearlbar.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            Call Me Pearl
            <br />
          </a>
          <a
            href="https://www.kachinadenver.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            Kachina Cantina
            <br />
          </a>
          <a
            href="https://www.milepostzero.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            Milepost Zero
            <br />
          </a>
          <a
            href="https://www.denvermilkmarket.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            Denver Milk Market
            <br />
          </a>
          <a
            href="https://www.theogdenver.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            The Original
            <br />
          </a>
          <a
            href="https://www.pokaloladenver.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            Poka Lola Social Club
            <br />
          </a>
          <a
            href="https://www.urbanfarmersteakhouse.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            Urban Farmer
            <br />
          </a>
          <a
            href="https://www.woodiefisher.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            Woodie Fisher
          </a>
        </p>
      </div>
    </article>
  );
};

export default DenverDugout;
