/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import SubHero from '../SubHero/App';
import { Title, SubTitle2, Pre } from "../Title";

import styles from './styles.module.scss';

const BaseAPIPage = ({ title, subtitle, url }) => {

  const [data, setData] = useState({
    titulo:"",
    description:""
  });

  useEffect(async () =>{
    const response = await fetch(url);
    const info = await response.json();
    setData(info[0]);
    console.log(data.titulo);
  }, []);

  return(
    <div className={styles.container}>
      <SubHero>
        <Title id="title">{title}</Title>
        <span id="subtitle">{subtitle}</span>
      </SubHero>
      <div className={styles.content}>
        <section>
          <div className={styles.answer}>
            <SubTitle2 className={styles.qtitle}>{data.titulo}</SubTitle2>
            <Pre>
              {data.description}
            </Pre>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BaseAPIPage;