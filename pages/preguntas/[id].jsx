import React from 'react';
import {getOneQuestion, getQuestion} from "../../src/routes/Config";

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
        fallback:true
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

const Principal = ( ) => {


    return (

        <div>
            hola
        </div>

    )


}

export default Principal;