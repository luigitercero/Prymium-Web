import React from 'react';
import {useRouter} from  'next/router'

const questionDetail = ( ) => {

    const router = useRouter();
    const questionID = router.query.description;

    return <div>asdfsd</div>


}

export default questionDetail;
