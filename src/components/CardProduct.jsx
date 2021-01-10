import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Title3ForCard } from './Title'

const CardProduct = ({ product }) => {
  const router = useRouter()
  const { imagen, alt, title, link } = product;
  const { group } = router.query
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

const Button = ({ link }) => {
  return (

    <div className="button">Ver detalles</div>

  )
}

export default CardProduct;
