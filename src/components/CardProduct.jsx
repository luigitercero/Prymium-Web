import React from 'react';
import Link from 'next/link';
import { Title3ForCard } from './Title'

const CardProduct = ({ product, isCatalog=false }) => {
  const { imagen, alt, title, link } = product;


  
  return (
    <Link href={isCatalog?link: `/tienda/detalle/${link}`}>
      <div className='card-container'>
        <Image img={imagen} alt={alt || "foto de lavatrastos" } />
        <Title3ForCard className="center-text">{isCatalog?"":title || "Lavatrastos mod 7807F"}</Title3ForCard>
        <Button link={link} isCatalog={isCatalog} title={title} />
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

const Button = ({link, isCatalog, title}) => {
  return (
    <Link href={isCatalog?link: `/tienda/detalle/${link}`}>
      <a className="button">{isCatalog?`${title}`:"Ver detalles"}</a>
    </Link>

  )
}

export default CardProduct;
