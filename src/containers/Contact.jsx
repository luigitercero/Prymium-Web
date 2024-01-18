import React from 'react';
import{ Title } from '@components/Title';
import SubHero from '@components/SubHero'
import ContactsList from '@components/ContactsList';
import ContactForm from '@components/ContactForm';
import ContactMap from '@components/ContactMap';
import Schedule from '@components/Schedule';
import contactItems from './contactitems.json';

const Contact = () => {

  return(
    <div className="container">
    
      <SubHero image="/images/backgrounds/contact-image.webp" alt="3a. calle 3-54 boulevard San Cristobal, zona 8 de Mixco, Guatemala, Guatemala" width="491" height="531" overlay>
        <Title id="title">Contáctenos</Title>
        <span id="subtitle">Y empiece a disfrutar de su nuevo lavatrastos</span>  
      </SubHero>
    
      <div className="content contact-content">
        <ContactsList contactsArray={contactItems} />
        <section className="main-content">
          <ContactMap />
          <ContactForm />
          <Schedule />
        </section>
      </div>
    </div>
  )
}

export default Contact;