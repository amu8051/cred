import React, { useState } from 'react';
import Feature from './Feature';
import './FeatureScroll.css';
const features = [
  {
    heading: 'we’ve got your back.',
    description:
      'gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.',
    image:
      'https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png',
  },
  {
    heading: 'begin your winning streak.',
    description:
      'use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.',
    image:
      'https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png',
  },
  {
    heading: 'for your eclectic taste.',
    description:
      'get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.',
    image:
      'https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png',
  },
  {
    heading: 'more cash in your pockets.',
    description:
      'switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.',
    image:
      'https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png',
  },
];
const FeatureScroll = () => {
  const [featureIndex, setFeatureIndex] = useState(0);
  // console.log('!!!feature scroll index: ', featureIndex);
  return (
    <div className="feature-scroll max-width flex">
      <div className="feature-scroll-text">
        {features.map((feature, index) => {
          return (
            <div className="feature-scroll-full-screen">
              <Feature
                feature={feature}
                featureIndex={index}
                setFeatureIndex={setFeatureIndex}
              />
            </div>
          );
        })}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={features[featureIndex].image}
              className="mobile-screen-img slide-in-right "
              key={features[featureIndex].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureScroll;
