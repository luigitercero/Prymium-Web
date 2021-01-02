import React from 'react';
import { Link,useParams } from 'react-router-dom';
import '../styles/components/cardProduct.scss';
import photo from '../img/img.png'
import { Title3ForCard } from './Title'

const CardProduct = ({ product }) => {
  const { imagen, alt, title,link } = product;
  const { group } = useParams();
  return (

    <div className='card-container'>
      <Link to={`${group}/${link}`}>
       
        <Image img={imagen || photo} alt={alt || "foto de lavatrastosO"} />
        <Title3ForCard className="center-text">{title || "Lavatrastos mod 7807F"}</Title3ForCard>
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
