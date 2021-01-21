import React from 'react';
import BaseAPIPage from '../../components/BaseAPIPage/App';

const Questions = ({question}) => {
  return(
    <BaseAPIPage title="¿Alguna duda?" subtitle="Nosotros la resolvemos" question={question} />
  )
}

export default Questions;