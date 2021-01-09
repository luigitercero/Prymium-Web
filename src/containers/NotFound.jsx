import React from 'react';
import img1 from '../img/imagen-hero.png'
import img from '../img/PrymiumImg.png'
import '../styles/container/notFound.scss'

const NotFound = () => {
  return (
    <>
      <img className="img1" loading="lazy" src={img1} alt="imgagen hero" />
      <img className="img" loading="lazy" src={img} alt="imgagen hero" />
    </>
  )
  
};

export default NotFound;
