import React, { useEffect, useRef, useState } from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const showcaseRef = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (showcaseRef.current) {
        observer.observe(showcaseRef.current);
      }
    }

    return () => {
      if (showcaseRef.current) {
        observer.unobserve(showcaseRef.current);
      }
    };
  });

  return (
    <div
      className={`showcase ${showAnimation ? 'scale-in-bottom' : ''}`}
      ref={showcaseRef}
    >
      {showAnimation && (
        <div className="showcase-container scale-in-bottom">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
            className="showcase-ui showcase-image-1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            className="showcase-ui showcase-image-2"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"
            className="showcase-ui showcase-image-3"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"
            className="showcase-ui showcase-image-4"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"
            className="showcase-ui showcase-image-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
