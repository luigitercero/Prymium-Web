import React from 'react';
import{ Title } from '../components/Title';
import ContactsList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';
import Schedule from '../components/Schedule';

import contactItems from './contactitems.json';
import '../styles/container/main.scss';
import '../styles/container/contact.scss';

const ContactHeader = () =>{
  return(
    <section className="contact-hero">
      <Title className="contact-title">Contáctenos</Title>
      <div className="contact-subtitle">
        <span>Y empiece a disfrutar de su nuevo lavatrastos</span>
      </div>
      <div className="contact-overlay" />
    </section>
  )
}

const Contact = () => {

  return(
    <div className="container">
      <ContactHeader />
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