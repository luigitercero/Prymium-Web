import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/cardProduct.scss';
import photo from '../img/img.png'
import { Title3 } from './Title'

const CardProduct = ({ product }) => {
  const { imagen, alt, title,link } = product;
  return (

    <div className='card-container'>
      <Link to={link}>
        <Title3>{title || "Lavatrastos mod 7807F"}</Title3>
        <Image img={imagen || photo} alt={alt || "foto de lavatrastosO"} />
      </Link>
    </div>

  )
}

const Image = ({ img, alt }) => {
  return (
    <div className='img-container'>
      <img loading="lazy" src={img} alt={alt} className="image" />
    </div>
  )

}


export default CardProduct;
