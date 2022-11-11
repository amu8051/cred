import React from 'react';
import Button from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      {/* <div className="hero-section-label flex center-component">
        <div>pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className="claim-text">
          claim now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
            alt="claim-arrow"
          />
        </div>
      </div> */}
      <div className="hero-section flex flex-column center-component max-width">
        <div className="hero-section-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-section-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText={'Download CRED'} />
      </div>
    </div>
  );
};

export default HeroSection;
