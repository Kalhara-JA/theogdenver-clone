import React from 'react';

const TheOGExperienceSection: React.FC = () => {
  return (
    <section className="c-split c-split--vcenter c-split--alternate revealable c-split-2 c-split-even c-split-last revealed">
      <div className="c-split__col c-split__col--empty">
        <div className="c-split__col-inner">
          <div
            className="c-split__image"
            role="presentation"
            style={{
              backgroundImage: `url('https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/87070330-From-the-Hip-Photo.JPG?w=1200&fit=max&auto=compress,format')`,
              backgroundPosition: 'none',
            }}
            aria-hidden="true"
            tabIndex={-1}
          ></div>
        </div>
      </div>
      <div className="c-split__col">
        <div className="c-split__col-inner">
          <div className="c-split__content content">
            <h2 className="h2 c-split__heading">The OG Experience</h2>
            <p>
              <span style={{ fontSize: '18px' }}>
                Located within the Rally Hotel, across 20th Street from Coors Field, we offer a brunching experience for both the young and young at heart.
              </span>
            </p>
            <p>
              <span style={{ fontSize: '18px' }}>
                Our two-toned Terrazzo floor mirrors the South Platte River as it winds through Denver, leading you through the restaurant to an outdoor patio located within McGregor Square for a front row seat to the bustling plaza and expansive outdoor screen.
              </span>
            </p>
            <p>
              <span style={{ fontSize: '18px' }}>
                Whether you're looking to kick-start your day, unwind on the weekends, or simply relish the joys of a leisurely brunch, The OG is your ultimate destination. Join us in celebrating the art of brunch, where every plate tells a story and every guest becomes part of our "OG" family.
              </span>
            </p>
            <p>
              <span style={{ fontSize: '18px' }}>
                Come and discover why "The Original" holds a special place in the hearts of locals and visitors alike, as we continue to redefine the essence of brunch in the heart of Denver, Colorado.
              </span>
            </p>
            <p>
              <span style={{ fontSize: '18px' }}>
                Come take a bite out of Denver at The OG -- we'll see you soon!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheOGExperienceSection;
