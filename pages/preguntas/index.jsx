import React from 'react';
import Head from '@hooks/useSEO';
import Questions from '@containers/Questions';
import { getQuestion,sobreAzulejo,url } from '@routes/Config';

export const getStaticProps = async () =>{
  // eslint-disable-next-line no-undef
  const response = await fetch(getQuestion.url);
  const question = await response.json()
  return {
    props: {
      question
    }
  }
}

const Principal = ({ question }) => {
  return (
    <Head
      title='Prymium | Bidet | Grifos | Preguntas'
      description="Preguntas resueltas y buenas prácticas para instalar y cuidar tu lavatrastos o grifo, obten de manera inmediata todas las respuestas "
      img={sobreAzulejo()}
      url={url}
    >
      <Questions question={question} />
    </Head>
  )
}

export default Principal;