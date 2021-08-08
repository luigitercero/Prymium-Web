import React from 'react';
import styles from "./styles.module.scss";
import Title from "../Title";
import SubHero from "../SubHero/App";


const InfoQuestion = ({title, description}) => {

    return(

        <div className={styles.container}>
            <div className="a1"></div>
            <div className="Probando">
                <h2 className={styles.centered}>
                    {title}
                </h2>
            </div>
        </div>




    );

}

export default InfoQuestion;