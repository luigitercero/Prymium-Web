import React from 'react';
import AnimatedGallery from './AnimatedGallery';
import { SubTitle } from './Title';

const BidetInfo = () =>{
  return(
    <div className="bidet-info">
      <div className="paragraph">
        <h3>Beneficios del Bidet:</h3>
        <ul>
          <li>Higiene intima más limpia, fresca, cómoda y segura.</li>
          <li>Previene infecciones y enfermedades.</li>
          <li>Evita la irritación y el mal olor</li>
          <li>Independencia higiénica en niños, ancianos, enfermos y personas con discapacidades físicas.</li>
          <li>Economía hasta de un 70% en el uso de papel higiénico.</li>
        </ul>
      </div>
      <div className="paragraph">
        <h3>Ideal para personas que padecen</h3>
        <ul>
          <li>Presión arterial alta</li>
          <li>Obesidad</li>
          <li>Hemorroides</li>
          <li>Colon irritable</li>
          <li>Colitis</li>
          <li>Enfermedades estomacales</li>
          <li>Periodo menstrual</li>
          <li>Personas que pasan mucho tiempo sentados, el bidet aumenta la circulación sanguínea</li>
        </ul>
      </div>
    </div>
  );
}

const BidetItem = ({ item }) => {
  const { image, alt, description } = item;
  return (
    <div className="bidetitem">
      <img src={image} alt={alt} loading="lazy" />
      <span>{description}</span>
      <div className="overlay" />
      <div className="bottom-overlay" />
    </div>
  );
}; 

const BidetFrame = ({ itemsArray }) => {
  const getList = () =>{
    return(
      itemsArray.map(item => { return(<BidetItem key={item.id} item={item} />) } )
    )  
  }

  return (
    <div className="bidetframe">
      <SubTitle>Bidet</SubTitle>
      <div className="gallery-wrapper">
        <AnimatedGallery baseName="bidet">
          {getList()}
        </AnimatedGallery>
        <div className="gallery-overlay" />
      </div>
      <BidetInfo />
    </div>
  );
};

export default BidetFrame;