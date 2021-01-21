import React from 'react';
import Link from 'next/link';
import { Title3ForCard } from './Title'

const CardProduct = ({ product }) => {
  const { imagen, alt, title, link } = product;
  
  return (
    <Link href={`/detalle/${link}`}>
      <div className='card-container'>



        <Image img={imagen} alt={alt || "foto de lavatrastosO"} />
        <Title3ForCard className="center-text">{title || "Lavatrastos mod 7807F"}</Title3ForCard>

        <Button link={link} />

      </div>
    </Link>
  )
}

const Image = ({ img, alt }) => {
  return (
    <div className='img-container'>
      <img loading="lazy" src={img} alt={alt} className="image" />
    </div>
  )

}

const Button = () => {
  return (

    <div className="button">Ver detalles</div>

  )
}

export default CardProduct;
