import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <button className="btn fa fa-play play-motion ada-motion-toggle-btns hide-motion" data-action="play"><span className="sr-only">hero gallery paused, press to play images slides</span></button>,
    prevArrow: <button className="btn fa fa-pause pause-motion ada-motion-toggle-btns" data-action="pause"><span className="sr-only">Playing hero gallery, press to pause images slides</span></button>,
  };

  const slides = [
    {
      img: 'https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/777950007-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      ariaLabel: 'a sign hanging outside a building',
      alt: '',
      caption: 'Slide 1 of 5',
    },
    {
      img: 'https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/895690096-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      ariaLabel: 'a room filled with furniture and a table',
      alt: '',
      caption: 'Slide 2 of 5',
    },
    {
      img: 'https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/104910152-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      ariaLabel: 'a group of people sitting at a table with an orange umbrella',
      alt: '',
      caption: 'Slide 3 of 5',
    },
    {
      img: 'https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/86820046-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      ariaLabel: 'a dining room table',
      alt: '',
      caption: 'Slide 4 of 5',
    },
    {
      img: 'https://images.getbento.com/accounts/3c10e657dc5f2aa01b55394e8376688a/media/images/169450196-From-the-Hip-Photo.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5',
      ariaLabel: 'a vase of flowers on a table',
      alt: '',
      caption: 'Slide 5 of 5',
    },
  ];

  return (
    <section
      id="hero"
      aria-label="hero-section"
      className="hero hero--no-content hero--gallery hero--scrollable revealable revealed"
      style={{ height: '0px' }}
    >
      <button type="button" className="hero__scroll-btn arrow-btn arrow-btn--down">
        <span className="sr-only">Scroll Down to Content</span>
      </button>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} role="img" aria-label={slide.ariaLabel} className="gallery__item gallery__item-fallback" style={{ backgroundImage: `url(${slide.img})`, backgroundPosition: '50.0% 50.0%' }}>
            <Image className="sr-only" src={slide.img} alt={slide.alt} layout="fill" objectFit="cover" />
            <span className="sr-only">{slide.caption}</span>
          </div>
        ))}
      </Slider>
      <div id="motion-elements-control-section">
        <button className="btn fa fa-play play-motion ada-motion-toggle-btns hide-motion" data-action="play">
          <span className="sr-only">hero gallery paused, press to play images slides</span>
        </button>
        <button className="btn fa fa-pause pause-motion ada-motion-toggle-btns" data-action="pause">
          <span className="sr-only">Playing hero gallery, press to pause images slides</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
