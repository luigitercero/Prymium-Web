import React from 'react';
import Questions from '../../src/containers/Questions/App';

import {  getQuestion} from '../../src/routes/Config';

export const getServerSideProps = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch(getQuestion.url);
  const question = await response.json()
  return {
    props: {
      question
    }
  }
}

const Principal = ({question}) => {
  return(
    <Questions question={question} />
  )
}

export default Principal;