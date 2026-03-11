import React from 'react';
import {getOneQuestion, getQuestion} from "@routes/Config";
import Head from "@hooks/useSEO";
import InfoQuestion from "@components/InfoQuestion";

export async function getStaticPaths() {
  // eslint-disable-next-line no-undef
  const res = await fetch(getQuestion.url);
  const questions = await res.json();
  const paths = questions.map(element => {
    return{
      params: {id:  `${element.id}`},
    }
  });

  return{
    paths,
    fallback:false
  }
}

export async function  getStaticProps({params}){
  try {   
    const  res = await fetch(`${getOneQuestion(params.id)}`);
    const question = await res.json();
    return{
      props:{
        question
      }
    }
  }catch (e){
    return {
      notFound: true,
    }
  }
}

const Principal = ( {question}) => {
  const questionTitle = question?.[0]?.titulo || 'Pregunta frecuente';
  const questionDescription = (question?.[0]?.description || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  return (
    <Head
      title={`${questionTitle} | Preguntas Prymium`}
      description={questionDescription || 'Preguntas frecuentes sobre instalacion y mantenimiento de productos Prymium.'}
      img={question?.[0]?.imagen}
    >
      <InfoQuestion title={question[0].titulo} description={question[0].description}></InfoQuestion>
    </Head>
  )
}

export default Principal;