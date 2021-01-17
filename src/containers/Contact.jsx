import React from 'react';
import Image from 'next/image';
import{ Title } from '../components/Title';
import ContactsList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap/App';
import Schedule from '../components/Schedule';

import contactItems from './contactitems.json';


const ContactHeader = ({ image }) =>(
  <section className="contact-hero">
    <div className="image">
      <Image
        src={image}
        layout="fill"
        priority="true"
        objectFit="cover"
        objectPosition="center"
      />
    </div>

    <Title className="contact-title">Contáctenos</Title>
    <div className="contact-subtitle">
      <span>Y empiece a disfrutar de su nuevo lavatrastos</span>
    </div>
    <div className="contact-overlay" />
  </section>
  )

const Contact = () => (
  <div className="container">
    <ContactHeader image="/images/backgrounds/contact-image.webp" />
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

export default Contact;