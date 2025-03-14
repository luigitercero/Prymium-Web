import React from 'react';
import { SubTitle2, Paragraph } from '@components/Title';
import Iframe from '@components/Iframe';
import styles from './styles.module.scss';

function ContactMap() {
  return <div className={styles.container}>
    <SubTitle2>Mapa</SubTitle2>
    <div className={styles.content}>

      <div className={styles.info}>
        <span className={styles.title}>Dirección:</span>
        <Paragraph>3a. calle 3-54 boulevard San Cristobal, zona 8 de Mixco, Guatemala</Paragraph>
      </div>

      <div className={styles.info}>
        <span className={styles.title}>Código Postal:</span>
        <Paragraph>01057</Paragraph>
      </div>

      <div className={styles.map_container}>
        <Iframe title="3a. calle 3-54 boulevard San Cristobal, zona 8 de Mixco, Guatemala, Guatemala" className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.7447549529747!2d-90.60625608515961!3d14.613610989794184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890a80dcfef08b%3A0x4393518a6d351144!2sLavatrastos%20Prymium!5e0!3m2!1sen!2sgt!4v1567268089894!5m2!1sen!2sgt" />
      </div>
      
    </div>
  </div>
}

export default ContactMap;