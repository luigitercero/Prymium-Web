import React from 'react';
import Head from '@hooks/useSEO';
import Questions from '@containers/Questions';
import { getQuestion, sobreAzulejo } from '@routes/Config';

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
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (question || []).map((item) => ({
      '@type': 'Question',
      name: item.titulo,
      acceptedAnswer: {
        '@type': 'Answer',
        text: (item.description || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
      }
    }))
  };

  return (
    <Head
      title="Preguntas Frecuentes | Lavatrastos Prymium Guatemala"
      description="Resuelve dudas sobre instalacion, mantenimiento, garantia y cuidados de lavatrastos, grifos, duchas y bidets Prymium."
      img={sobreAzulejo()}
      structuredData={[faqSchema]}
    >
      <Questions question={question} />
    </Head>
  )
}

export default Principal;