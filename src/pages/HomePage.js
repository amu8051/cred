import React from 'react';
import Brands from '../components/Brands';
import CredSecurity from '../components/CredSecurity';
import CredStory from '../components/CredStory';
import FeatureScroll from '../components/FeatureScroll';
import FeelSpecial from '../components/FeelSpecial';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MoneyMatters from '../components/MoneyMatters';
import ProductShowcase from '../components/ProductShowcase';
import Rating from '../components/Rating';
import WindowPeek from '../components/WindowPeek';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <Brands />
      <MoneyMatters />
      <FeatureScroll />
      <WindowPeek />
      <CredSecurity />
      <CredStory />
      <Rating />
      <Footer />
    </div>
  );
};

export default HomePage;
