import React, {useState} from 'react';
import {getOneQuestion, getQuestion} from "../../src/routes/Config";
import Head from "@hooks/useSEO";
import {useRouter} from "next/router";
import BaseQuestionsPage from "../../src/components/BaseQuestionsPage/App";

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


    const [element,setElement] = useState(question[0]);



    return (

        <Head
            title='Prymium | Bidet | Grifos | Preguntas'
            description="Preguntas resueltas y buenas prácticas para instalar y cuidar tu lavatrastos o grifo, obten de manera inmediata todas las respuestas "
        >

            <BaseQuestionsPage description={element.description} title={element.titulo}></BaseQuestionsPage>


        </Head>

    )


}

export default Principal;