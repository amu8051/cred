import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log('toggle menu!!!');
    setShowMenu(!showMenu);
    // document.querySelector('body').classList.toggle('body-overflow-visible');
  };
  return (
    <div className="header-container">
      <div className="header flex max-width">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          className="header-logo"
          alt="cred-logo"
        />
        <div className="only-mobile mobile-menu-button-container">
          <button
            class={`hamburger hamburger--spin ${showMenu ? 'is-active' : ''}`}
            type="button"
            onClick={toggleMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">credit score check</div>
          <div className="header-nav-item">CRED pay</div>
        </div>

        <div className={`mobile-menu only-mobile ${showMenu ? 'overlay' : ''}`}>
          <div className="mobile-navbar">
            <div className="mobile-nav-item">credit score check</div>
            <div className="mobile-nav-item">CRED pay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
