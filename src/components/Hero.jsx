import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Hero = ({ title, image, subtitle, linktext, url}) => {

  return (
    <div className="img-hero">
      <div className="image">
        <Image 
          src={image}
          priority="true"
          // quality={75}
          objectFit="cover"
          objectPosition="bottom center"
          layout="fill"
        />        
      </div>
      <h1 id="line-one">{title}</h1>
      <span id="line-two">{subtitle}</span>
      <Link href={url}>
        {linktext}
      </Link>
    </div>
  );
};

export default Hero;