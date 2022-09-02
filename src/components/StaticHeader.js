import React from 'react';
import appLogoText from './appLogoText.png';
import './StaticHeader.css';

const StaticHeader = () => (
  <section className="header">
    <img className="header-img" src={appLogoText} alt="appLogoText" />
  </section>
);

export default StaticHeader;
