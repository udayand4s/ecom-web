'use client'
import React, { useEffect, useState } from 'react';

const ScrollSnapComponent = () => {
  const images = [
    '/p1.jpg',
    '/p2.jpg',
    '/p3.jpg',
    '/p4.jpg',
    '/p5.jpg',
    '/p6.jpg',
    '/p7.jpg',
    // Add paths to your images here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');

    const handleScroll = () => {
      const scrollPosition = scrollContainer.scrollTop;
      const currentIndex = Math.round(scrollPosition / window.innerHeight);
      setCurrentImageIndex(currentIndex);
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mx-0 my-0 sm:mx-0 sm:my-0">
      <div className="scroll-container h-screen overflow-y-scroll snap-y snap-mandatory duration-1000 scrollbar-hidden">
        {images.map((src, index) => (
          <div key={index} className="section h-screen snap-start flex justify-center items-center">
            <img className="max-w-full max-h-full object-contain" src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Horizontal grid for thumbnails */}
      <div className="horizontal-grid flex overflow-x-auto mt-5 w-full scrollbar-hidden">
        <div className="flex flex-nowrap space-x-2">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`w-12 h-12 object-cover transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-40' : 'opacity-100'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSnapComponent;
