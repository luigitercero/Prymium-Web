import React from 'react';
import Link from 'next/link';


const Hero = ({ title, subtitle, linktext,url }) => {
  return (
    <div className="img-hero">
      <h1 id="line-one">{title}</h1>
      <span id="line-two">{subtitle}</span>
      <Link href={url} id="see-more">
        {linktext}
      </Link>
    </div>
  );
};

export default Hero;