import React from 'react';
import ReactDOM from "react-dom";
import { Title, Price, Pre } from "@components/Title";
import Carrusel from './Carrusel';

const SingleProduct = ({ id, product, }) => {
  
  return (
    <section className='container-single-product' key={id}>
      
      <div className="container-product">
        <Title className="title-single-product">{product.title}</Title>
        
        <Carrusel 
          alt={product.content} 
          src={product.accesorio || [product.imagen]} 
          video={product.video} 
          className="img-single-product" 
          title={product.title} />

        {
          product.medidas && (
          <Image 
            className="medidas" 
            imgClass="img" 
            src={product.medidas} 
            alt={product.content} 
          />
          )
        }

        <Price className="price-single-product">{product.price}</Price>
        <DatosTecnicos datosTecnicos={product.datos_tecnicos} />
        <section className="text-single-product">
          <Pre>{product.content}</Pre>
        </section>
      </div>
      
    </section>
  )
}

export default SingleProduct;
const Image = ({ src, alt, className, imgClass }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt} className={imgClass || ''} />
    </figure>
  )
}

const DatosTecnicos = (datosTecnicos) => {
  const splitDatos = () => {

    return (
      datosTecnicos.datosTecnicos.map((data, index) => {
        return <li key={`D${index + 1}`}><Pre>{data}</Pre></li>
      })
    )
  }

  return (
    <section className="tecnicos-single-product">
      <ul className='list-tecnico'>
        {splitDatos()}
      </ul>
    </section>
  )
}