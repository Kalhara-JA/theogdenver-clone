import Image from 'next/image';
import React from 'react';

const HeroSection = () => (
  <section
    id="hero"
    aria-label="hero-section"
    className="hero hero--scrollable hero--fullheight revealable revealed"
    style={{ backgroundColor: 'rgb(245, 243, 236)', height: '464.362px' }}
  >
    <div className="hero__content container">
      <p>
        <Image
          src="https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/850Logo_primary.png?w=1000&fit=max&auto=compress,format&h=1000"
          alt="logo, icon"
          width={525}
          height={525}
          className="fr-fic fr-dib"
        />
      </p>
      <p><br /></p>
      <table style={{ width: '100%' }} role="presentation">
        <tbody>
          <tr>
            <td style={{ width: '33.3333%' }}>
              <h3 role="heading" aria-level={2}>Comforts</h3>
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
    <button type="button" className="hero__scroll-btn arrow-btn arrow-btn--down">
      <span className="sr-only">Scroll Down to Content</span>
    </button>
    <div id="audioeye_live_message" className="ae-compliance-indent" aria-live="polite" role="region"></div>
  </section>
);

export default HeroSection;
