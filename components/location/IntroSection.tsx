import Link from 'next/link';

const IntroSection = () => (
  <section id="intro" className="content c-intro container-sm revealable revealed">
    <h1>Hours &amp; Location</h1>
    <p>
      <a
        href="https://maps.google.com/?cid=17981716346260106472"
        target="_blank"
        rel="noopener"
        data-bb-track="button"
        data-bb-track-on="click"
        data-bb-track-category="Address"
        data-bb-track-action="Click"
        data-bb-track-label="Location"
        aria-describedby="audioeye_new_window_message"
      >
        1600 20th St,<br /> Denver, CO 80202
      </a>
      <br />
      <a
        href="tel:720.769.1414"
        data-bb-track="button"
        data-bb-track-on="click"
        data-bb-track-category="Phone Number"
        data-bb-track-action="Click"
        data-bb-track-label="Location"
      >
        720.769.1414
        <span style={{ display: 'none' }} className="ae-compliance-indent ae-reader-visible">
          {' '}
          Phone number{' '}
        </span>
      </a>
    </p>
    <p><strong>OPEN EVERY DAY OF WEEK!</strong><br />7 AM - 3 PM</p>
    <p>*(Hours may vary based on Rockies home games / other events)*</p>
    <p>
      Located in the heart of Denver's bustling McGregor Square, The Original, fondly known by locals as "The OG," redefines the brunch experience. Renowned as a premier brunch destination in Denver, The OG excels in crafting exquisite breakfast, lunch and brunch dishes. As a celebrated brunch spot near Coors Field, we pride ourselves on being pioneers in the culinary scene, offering an unforgettable dining experience. Whether you're seeking the best brunch in Denver, a delightful breakfast near Coors Field, or a lunch spot that combines innovation with classic flavors, The OG stands as your go-to destination. Join us at The OG, where every dish is a testament to our passion for exceptional brunch experiences.
    </p>
    <p>Valet parking is also available at The Rally Hotel for $15 on Wazee Street between 19th and 20th.</p>
  </section>
);

export default IntroSection;
