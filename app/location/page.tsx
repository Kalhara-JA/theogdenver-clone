import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '@/components/common/Carousel';

const Content: React.FC = () => {

    const images = [
        'images/44830237-From-the-Hip-Photo11d2.jpg',
        'images/226340073-From-the-Hip-Photo_111d2.jpg',
        'images/44830237-From-the-Hip-Photo11d2.jpg',
    ]

    return (
        <div className="site-content">
            <div className="site-header-spacer-desktop" aria-hidden="true" style={{ height: '108.275px' }}></div>
            <div className="site-header-spacer-mobile" aria-hidden="true" style={{ height: '75.475px' }}></div>

            <main className="site-content__main page-id--27523">
                <span id="main-content" className="sr-only">Main content starts here, tab to start navigating</span>

                <section id="hero" aria-label="hero-section" className="hero hero--no-content hero--gallery hero--scrollable revealable revealed" style={{ height: '0px' }}>
                    <button type="button" className="hero__scroll-btn arrow-btn arrow-btn--down">
                        <span className="sr-only">Scroll Down to Content</span>
                    </button>

                    <div className="gallery gallery--fit gallery--dimmed" role="region" aria-label="carousel">
                        <span className="sr-only">The image gallery carousel displays a single slide at a time. Use the next and previous button to browse 5 slides. The following carousel hides non-visible slides from screen reader users. Use of next and previous buttons is necessary to see all slides.</span>
                        <Carousel images={images} />
                    </div>
                </section>

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
                            720.769.1414<span style={{ display: 'none' }} className="ae-compliance-indent ae-reader-visible"> Phone number </span>
                        </a>
                    </p>
                    <p><strong>OPEN EVERY DAY OF WEEK!</strong><br />7 AM - 3 PM</p>
                    <p>*(Hours may vary based on Rockies home games / other events)*</p>
                    <p>Located in the heart of Denver's bustling McGregor Square, The Original, fondly known by locals as "The OG," redefines the brunch experience. Renowned as a premier brunch destination in Denver, The OG excels in crafting exquisite breakfast, lunch and brunch dishes. As a celebrated brunch spot near Coors Field, we pride ourselves on being pioneers in the culinary scene, offering an unforgettable dining experience. Whether you're seeking the best brunch in Denver, a delightful breakfast near Coors Field, or a lunch spot that combines innovation with classic flavors, The OG stands as your go-to destination. Join us at The OG, where every dish is a testament to our passion for exceptional brunch experiences.</p>
                    <p>Valet parking is also available at The Rally Hotel for $15 on Wazee Street between 19th and 20th.</p>
                </section>

                {/* <section className="gmaps__container revealable revealed">
                    <a
                        href="https://maps.google.com/?cid=17981716346260106472"
                        className="btn btn-brand gmaps__directions-btn"
                        target="_blank"
                        rel="noopener"
                        data-bb-track="button"
                        data-bb-track-on="click"
                        data-bb-track-category="Address"
                        data-bb-track-action="Click"
                        data-bb-track-label="Map"
                        aria-describedby="audioeye_new_window_message"
                    >
                        Get Directions
                    </a>
                    <div
                        className="gmaps"
                        data-gmaps-static-url-mobile="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyCxtTPdJqQMOwjsbKBO3adqPGzBR1MgC5g&maptype=roadmap&format=png&scale=2&size=570x570&sensor=false&language=en&center=39.7548480000%2C-104.9958580000&zoom=17&markers=%7C39.7548480000%2C-104.9958580000&signature=cNCgZR37M2OVSGzHDZghah1flgk="
                        data-gmaps-address="1600 20th St, Denver, CO 80202"
                        data-gmaps-href="https://maps.google.com/?cid=17981716346260106472"
                        data-gmaps-place-id="ChIJ7WDnQ3h5bIcR6Cyr5r7ji_k"
                        data-gmaps-lat="39.7548480000"
                        data-gmaps-lng="-104.9958580000"
                        role="presentation"
                        aria-label="Google Map"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ position: 'relative', overflow: 'hidden' }}
                    > */}
                        {/* Insert the Google Maps iframe or script here */}
                    {/* </div>
                </section> */}
            </main>

            <aside className="hospitality revealable revealed">
                <ul className="hospitality__list" role="presentation">
                    <li className="hospitality__item">
                        <a href="https://www.sagehospitality.com/restaurant-concepts/" target="_blank" rel="noopener" aria-describedby="audioeye_new_window_message">
                            <img
                                src="https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/22322Hosp_logo.png?w=1200&fit=max&auto=compress,format|resize(786)"
                                className="False"
                                loading="lazy"
                                alt="logo"
                                style={{ objectPosition: 'none' }}
                            />
                        </a>
                    </li>
                </ul>
            </aside>

            <aside className="mobi-footer mobi-footer--sticky">
                <ul className="mobi-footer__list" role="presentation">
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
            </aside>
        </div>
    );
};

export default Content;
