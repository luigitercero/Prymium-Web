import React from 'react';
import {Link} from 'react-router-dom';

const Hero = props => {
  return (
    <div className="hero">
      <h1 id="line-one">{props.title}</h1>
      <span id="line-two">{props.subtitle}</span>
      <Link to="/" id="see-more">{props.linktext}</Link>
    </div>
  )
};

export default Hero;