import React from 'react';
import {Title, SubTitlen, Pre, SubTitle} from "../Title";
import styles from "./styles.module.scss";
import SubHero from "../SubHero/App";

const BaseQuestionsPage = ({title, description}) => {


    return (

      <div className={styles.container}>
        <SubHero isCentered>
            <span id="subtitle">{title}</span>
        </SubHero>
        <div className={styles.content}>
          <section className={styles.items_container} >
            Description
          </section>

        </div>
      </div>
    )

}

export default BaseQuestionsPage;