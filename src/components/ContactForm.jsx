import React, { useState } from 'react';
import { SubTitle2 } from './Title';
import {feedback} from '@routes/Config'

const useContact = (initialState) => {
  const [value, setValue] = useState(initialState);
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}

const ContactForm = () => {
  const yourname = useContact('');
  const email = useContact('');
  const message = useContact('');
  const url = feedback;
  const sendEmail = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('yourname', yourname.value);
    formData.append('email', email.value);
    formData.append('message', message.value);
    window.fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
       // console.log('Success:', result);
      })
      .catch(error => {
        //console.error('Error:', error);
      });
  }
  
  return (
    <div className="form-container">
      <SubTitle2>Envía tus comentarios</SubTitle2>
      <form onSubmit={sendEmail} className="form">
        <input {...yourname} name="yourname" className="input" type="text" placeholder="Nombre*" required />
        <input {...email} name="email" className="input" type="email" placeholder="Email*" required />
        <textarea {...message} name="message" rows="10" placeholder="Su comentario" />
        {/* <input type="submit" className="submit" value="Enviar" /> */}
        <button type="submit">Enviar</button>
        <span className="note">*: Obligatorio</span>
      </form>
    </div>
  )
}

export default ContactForm;