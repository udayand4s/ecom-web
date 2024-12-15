'use client'
import React, { useEffect, useRef } from 'react';

const MyCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    
    if (container) {
      const itemHeight = container.firstChild.clientHeight;

      let isScrolling;
      const handleScroll = (event) => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          const scrollPosition = container.scrollTop;
          const scrollOffset = scrollPosition % itemHeight;
          const adjustment = scrollOffset > itemHeight / 2 ? itemHeight - scrollOffset : -scrollOffset;
          const targetPosition = scrollPosition + adjustment;

          // Smoothly animate to the target position
          container.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }, 400); // Increase delay for smoother animation
      };

      container.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="my-carousel X" ref={carouselRef}>
      <div className="carousel-item">
        <img src="/p1.jpg" alt="Product 1" />
      </div>
      <div className="carousel-item">
        <img src="/p2.jpg" alt="Product 2" />
      </div>
      <div className="carousel-item">
        <img src="/p3.jpg" alt="Product 3" />
      </div>
      <div className="carousel-item">
        <img src="/p4.jpg" alt="Product 4" />
      </div>
      <div className="carousel-item">
        <img src="/p5.jpg" alt="Product 5" />
      </div>
      <div className="carousel-item">
        <img src="/p5.jpg" alt="Product 5" />
      </div>
      <div className="carousel-item">
        <img src="/p5.jpg" alt="Product 5" />
      </div>
      {/* Add more items as needed */}
    </div>
  );
};

export default MyCarousel;
