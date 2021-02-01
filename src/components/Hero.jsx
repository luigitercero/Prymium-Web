import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Hero = ({ title, image, subtitle, linktext, url}) => {

  return (
    <div className="img-hero">
      <div className="image">
        <Image 
          src={image}
          alt="lavatrastos 1820T calibre 18, instalado bajo topo de granito o formica, renderizado a computadora de acero inoxidable"
          priority
          objectFit="cover"
          layout="fill"
          objectPosition="bottom"
        />        
      </div>
      <h1 id="line-one">{title}</h1>
      <span id="line-two">{subtitle}</span>
      <div className="link">
        <Link href={url}>
          {linktext}
        </Link>
      </div>
      <a href="#galeria" className="arrows">
        <img className="arrow" src="/images/icons/left-arrow.png" alt="arrow" />
        <img className="arrow" src="/images/icons/left-arrow.png" alt="arrow" />
        <img className="arrow" src="/images/icons/left-arrow.png" alt="arrow" />
      </a>
    </div>
  );
};

export default Hero;