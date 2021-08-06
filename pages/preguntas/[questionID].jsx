import React from 'react';
import {useRouter} from  'next/router'
import Head from '@hooks/useSEO';
import BaseQuestionsPage from "../../src/components/BaseQuestionsPage/App";

const questionDetail = ( ) => {

    const router = useRouter();
    const {title, description} = router.query;

    return (

        <Head
            title='Prymium | Bidet | Grifos | Preguntas'
            description="Preguntas resueltas y buenas prácticas para instalar y cuidar tu lavatrastos o grifo, obten de manera inmediata todas las respuestas "
        >

            <BaseQuestionsPage title={title} description={description}></BaseQuestionsPage>

        </Head>


    )


}

export default questionDetail;