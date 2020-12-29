import React from 'react';
import '../styles/components/cardProduct.scss';
import photo from '../img/img.png'
import {Title3,Paragraph} from './Title'

const CardProduct = ({ product }) => {
  const {imagen,alt,title} = product;
  return (
    <div  className='card-container'>
      <Title3>{title||"Lavatrastos mod 7807F"}</Title3>
      <Image img={imagen || photo} alt={alt || "foto de lavatrastosO"} />
    
    </div>
  )
}

const Image = ({ img, alt }) => {
  return (
    <div className='img-container'>
      <img src={img} alt={alt} className="image" />
    </div>
  )

}


export default CardProduct;
