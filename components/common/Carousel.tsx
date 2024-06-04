"use client";

import { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

interface CarouselProps {
  images: string[];
  interval?: number; // Optional prop to specify the interval duration
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56vh;
  overflow: hidden;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    height: 96vh;
  }
`;

const Slide = styled.div<{ isCurrent: boolean; isExiting: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: opacity 0.7s ease-in-out;
  opacity: ${(props) => (props.isCurrent ? 1 : 0)};
  z-index: ${(props) => (props.isCurrent ? 2 : 1)};
  ${(props) =>
    props.isExiting &&
    css`
      animation: ${fadeOut} 0.7s ease-in-out forwards;
    `}
  ${(props) =>
    props.isCurrent &&
    css`
      animation: ${fadeIn} 0.7s ease-in-out forwards;
    `}
`;

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (isSliding) return;
    setIsSliding(true);
    setExitingIndex(currentIndex);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
      setExitingIndex(null);
    }, 700); // duration of the fade animation
  };

  const handlePrev = () => {
    if (isSliding) return;
    setIsSliding(true);
    setExitingIndex(currentIndex);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsSliding(false);
      setExitingIndex(null);
    }, 700); // duration of the fade animation
  };

  const handleIndicatorClick = (index: number) => {
    if (isSliding) return;
    setIsSliding(true);
    setExitingIndex(currentIndex);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsSliding(false);
      setExitingIndex(null);
    }, 700); // duration of the fade animation
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, interval);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex, interval]);

  return (
    <div id="default-carousel" className="relative h-[75vh]" data-carousel="slide">
      <CarouselContainer className='max-h-[75vh]'>
        {images.map((image, index) => (
          <Slide
            key={index}
            isCurrent={index === currentIndex}
            isExiting={index === exitingIndex}
            data-carousel-item
          >
            <img
              src={image}
              className="block w-full object-cover "
              alt={`Slide ${index + 1}`}
            />
          </Slide>
        ))}
      </CarouselContainer>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
      {/* <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  );
};

export default Carousel;
