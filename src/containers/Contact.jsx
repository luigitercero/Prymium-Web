import React from 'react';
import{ Title } from '../components/Title';
import SubHero from '../components/SubHero/App'
import ContactsList from '../components/ContactsList';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap/App';
import Schedule from '../components/Schedule';

import contactItems from './contactitems.json';

const Contact = () => {

  return(
    <div className="container">
      <SubHero image="/images/backgrounds/contact-image.webp" overlay>
        <Title>Contáctenos</Title>
        <span>Y empiece a disfrutar de su nuevo lavatrastos</span>
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