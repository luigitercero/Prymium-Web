import React from 'react';
import styles from "./styles.module.scss";
import Title, {Pre} from "../Title";
import SubHero from "../SubHero/App";


const InfoQuestion = ({title, description}) => {

    return(
       <div className={styles.body}>
        <div className={styles.center}>
            <div className={styles.contenido}>
                <h2 className={styles.fuente}>
                    {title}
                </h2>

                <div>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>


            </div>
        </div>
       </div>


    );

}

export default InfoQuestion;