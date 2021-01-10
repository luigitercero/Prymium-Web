import React from 'react';
import { SubTitle2 } from './Title';

const ContactForm = () => {
  return(
    <div className="form-container">
      <SubTitle2>Envía tus comentarios</SubTitle2>
      <form action="#" method="post" className="form">
        <input className="input" type="text" placeholder="Nombre*" required />
        <input className="input" type="email" placeholder="Email*" required />
        <textarea name="comments" rows="10" placeholder="Su comentario" />
        <input type="submit" className="submit" value="Enviar" />
        <span className="note">*: Obligatorio</span>
      </form>
    </div>
  )
}

export default ContactForm;