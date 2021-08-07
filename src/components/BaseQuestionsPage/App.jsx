import React,  from 'react';
import styles from "./styles.module.scss";
import SubHero from "../SubHero/App";
import {Pre} from "../Title";


const InfoQuestion = ({description}) => {


    return(
      <div className={styles.item}>
        <Pre>
            {description}
        </Pre>

      </div>
    )

}

const BaseQuestionsPage = ({title, description}) => {


    return (

      <div className={styles.container}>
        <SubHero isCentered>
          <span id="subtitle">{title}</span>
        </SubHero>
        <div className={styles.content}>
          <section className={styles.items_container}>
            <InfoQuestion description={description} />
          </section>

        </div>
      </div>
    )

}

export default BaseQuestionsPage;