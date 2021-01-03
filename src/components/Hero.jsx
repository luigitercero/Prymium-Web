import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/hero.scss';

const Hero = ({ title, subtitle, linktext,url }) => {
  return (
    <div className="img-hero">
      <h1 id="line-one">{title}</h1>
      <span id="line-two">{subtitle}</span>
      <Link to={url} id="see-more">
        {linktext}
      </Link>
    </div>
  );
};

export default Hero;