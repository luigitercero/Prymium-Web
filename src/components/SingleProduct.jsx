import React from 'react';
import { Title, Price, Pre, Paragraph } from "./Title";
import '../styles/components/singleProduct.scss';

const SingleProduct = ({ id, product }) => {

  return (
    <section className='container-single-product' key={id}>
      <div className="container-product">
        <Title className="title-single-product">{product.title}</Title>
        <Image className="img-single-product" src={product.accesorio || product.imagen} alt={product.content} />

        <Price className="price-single-product">{product.price}</Price>
        <DatosTecnicos datosTecnicos={product.datos_tecnicos} />
        <section className="text-single-product">
          <Paragraph>{product.content}</Paragraph>
        </section>
        
      </div>

    </section>

  )
}

export default SingleProduct;

const Image = ({ src, alt, className }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt} />
    </figure>

  )
}

const DatosTecnicos = (datosTecnicos) => {
  const splitDatos = () => {

    return (
      datosTecnicos.datosTecnicos.map((data, index) => {
        return <span key={`D${index + 1}`}><Pre>{data}</Pre></span>
      })
    )
  }

  return (
    <section className="tecnicos-single-product">
      {splitDatos()}
    </section>
  )
}


