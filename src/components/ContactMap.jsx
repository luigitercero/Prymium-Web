import React , { useRef, useEffect } from 'react';
import { SubTitle2, Title3, Paragraph } from './Title';

import '../styles/components/contact-map.scss';

const ContactMap = () => {
  const map = useRef();

  const setVariables = () => {
    const width = map.current.offsetWidth;
    map.current.style.height = `${width/1.5}px`;
  }

  useEffect(() => {
    setVariables();
  }, [])

  window.addEventListener('resize', () => {setTimeout(setVariables, 20)})

  return(
    <div className="map-container">
      <SubTitle2>Mapa</SubTitle2>
      <iframe title="map" ref={map} className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.7447549529747!2d-90.60625608515961!3d14.613610989794184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890a80dcfef08b%3A0x4393518a6d351144!2sLavatrastos%20Prymium!5e0!3m2!1sen!2sgt!4v1567268089894!5m2!1sen!2sgt" allowFullScreen="" frameBorder="0" />
      <div className="map-info">
        <span className="map-info-title">Dirección:</span>
        <Paragraph>3a. calle 3-54 boulevard San Cristobal, zona 8 de Mixco, Guatemala, Guatemala</Paragraph>
      </div>
      <div className="map-info">
        <span className="map-info-title">Código Postal:</span>
        <Paragraph>01057</Paragraph>
      </div>

    </div>
  )
}

export default ContactMap;