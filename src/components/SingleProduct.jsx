import React from 'react';
import { Title, Price,Pre,Paragraph } from "./Title";

const SingleProduct = ({ id, product }) => {

  return (
    <div className='containerSingleProduct' key={id}>
      <Image src={product.accesorio || product.imagen} alt={product.content} />
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
      <DatosTecnicos datosTecnicos={product.datos_tecnicos} />
      <Paragraph>{product.content}</Paragraph>

    </div>

  )
}

export default SingleProduct;

const Image = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} />
  )
}

const DatosTecnicos = (datosTecnicos) => {
  const splitDatos = () => {
    
    return (
      datosTecnicos.datosTecnicos.map ((data) => {
       return  <li><Pre>{data}</Pre></li>
      })
    )
  }

  return (
    <>
      {splitDatos()}
    </>
  )
}


