import React from 'react';
import BaseAPIPage from '../../components/BaseAPIPage/App';

const API_URL = 'https://lavatrastosprymium.com/wp-json/pg/v1/preguntas/'

const Questions = () => {
  return(
    <BaseAPIPage title="¿Alguna duda?" subtitle="Nosotros la resolvemos" url={API_URL} />
  )
}

export default Questions;