import React from 'react';

const EatDrinkSupportLocal: React.FC = () => {
  return (
    <article className="article content">
      <div className="container revealable revealed">
        <h1>Eat, Drink &amp; Support Local</h1>
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
                  role="img"
                  aria-label="a store front at day"
                  className="gallery__item gallery__item-fallback"
                  style={{
                    backgroundImage:
                      "url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/528090149-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5')",
                    backgroundPosition: '50.0% 50.0%',
                  }}
                >
                  <img className="sr-only" alt="a store front at day" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-md revealable">
        <p>
          We are honored to collaborate and forge strong partnerships with local
          businesses, embodying our unwavering commitment to supporting the
          vibrant community we call home.
        </p>
        <p>
          <a
            href="https://www.boyerscoffee.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            <span style={{ fontSize: '18px' }}>
              <strong>Boyer’s Coffee</strong>
            </span>
          </a>{' '}
          <em>
            <span style={{ fontSize: '14px' }}>
              a Beloved Family-Owned Legacy Since 1965 -&nbsp;
            </span>
          </em>
          <span style={{ fontSize: '14px' }}>
            We take great pride in serving you the finest local offerings, and
            our partnership with Boyer’s Coffee is a true testament to our
            commitment. For over half a century, Boyer’s Coffee has been an
            integral part of Denver's coffee culture, and we are thrilled to
            pour their renowned Rockies Roast. A medium-dark roast with notes of
            milk chocolate and dark cacao while boasting a well-balanced body
            and acidity.
          </span>
        </p>
        <p>
          <a
            href="https://www.quarantineprojectsauce.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            <span style={{ fontSize: '18px' }}>
              <strong>Quarantine Project</strong>
            </span>
          </a>{' '}
          <span style={{ fontSize: '14px' }}>
            - We delighted to offer two of their signature sauces, Dieselbones
            and BullHeaded, in all of our table caddies. Not only do they make
            for a great addition to any of our brunch dishes, with every bottle
            we purchase a portion of the sales go to support two{' '}
            <a
              href="https://www.quarantineprojectsauce.com/causes"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="audioeye_new_window_message"
            >
              local causes
            </a>
            ; The Bug Theatre and The Family Tree. So go ahead a put a little
            extra on your eggs. Excited to get some for yourself? Make sure to
            use the <strong>promo code "TheOG" for 15% off</strong> your first
            order!
          </span>
        </p>
        <p>
          <a
            href="https://www.bakersway.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            <span style={{ fontSize: '18px' }}>
              <strong>Baker's Way</strong>
            </span>
          </a>{' '}
          <span style={{ fontSize: '14px' }}>
            - all of our breads, buns and bagels come from this locally &amp;
            woman-owned bakery which has been proudly serving Denver since 1998.
            Not only is all their product baked fresh daily but also 100%
            preservative-free.
          </span>
        </p>
        <p>
          <a
            href="https://thefamilyjones.co/"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            <strong>
              <span style={{ fontSize: '18px' }}>The Family Jones</span>
            </strong>
          </a>{' '}
          <span style={{ fontSize: '14px' }}>
            - Our signature OG Bloody Mary features their Jones House Vodka
            which is distilled from 100% American grown corn and diluted with
            Colorado spring water. Their amazing spirits are made thanks to the
            partnerships they have with local Colorado farmers. Make sure to go
            and check out their tasting room at 3245 Osage St. Denver, CO 80211!
          </span>
        </p>
        <p>
          <a
            href="https://www.theogdenver.com/menus/#drinks"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="audioeye_new_window_message"
          >
            <strong>
              <span style={{ fontSize: '18px' }}>Indulge in Local Brews</span>
            </strong>
          </a>{' '}
          <span style={{ fontSize: '14px' }}>
            - make sure to check out our curated beer list featuring a
            handpicked selection of local Colorado beers &amp; cider.
          </span>
        </p>
      </div>
    </article>
  );
};

export default EatDrinkSupportLocal;
