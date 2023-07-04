import React, { useState, useEffect } from 'react';

const SlideshowPower = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/images/Fall.png', alt: 'Image 1' },
    { src: '/images/Spring.png', alt: 'Image 2' },
    { src: '/images/Start.png', alt: 'Image 3' },
    { src: '/images/Winter.png', alt: 'Image 4' },
    { src: '/images/best.svg', alt: 'Image 5' },
  ];

  useEffect(() => {
    // Function to show the next slide
    const showNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Start the slideshow
    const interval = setInterval(showNextSlide, 2000); // Change slide every 2 seconds (2000 milliseconds)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-md-4">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.alt}
          style={{ marginRight: '20px', display: index === currentSlide ? 'inline-block' : 'none',width:'220px',height:'220px' }}
        />
      ))}
    </div>
  );
};

export default SlideshowPower;