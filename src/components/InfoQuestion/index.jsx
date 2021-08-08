import React from 'react';
import styles from "./styles.module.scss";
import Title, {Pre} from "../Title";
import SubHero from "../SubHero/App";


const InfoQuestion = ({title, description}) => {

    return(
        <div className="container">
            <div className="conteiner"></div>
            <div className="cabezera">
                <div className="titulo">
                    <h2 className={styles.centered}>
                        {title}
                    </h2>
                </div>
            </div>
            <div className="cuerpo">
                <div className="contenedorinfo">
                    <div className={styles.content}>
                        <section className={styles.items_container}>
                            <div className={styles.item}>
                                <div className={styles.textAling}>
                                    <div dangerouslySetInnerHTML={{ __html: description }} />
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>


    );

}

export default InfoQuestion;