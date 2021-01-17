/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import SubHero from '../SubHero/App';
import { Title, SubTitle2, Pre } from "../Title";

import styles from './styles.module.scss';

const Item = ({ item }) => {
  const { titulo, description } = item;

  return(
    <div className={styles.item}>
      <div>
        <SubTitle2 className={styles.item_title}>{titulo}</SubTitle2>
      </div>
      <div className={styles.item_content}>
        <Pre>
          {description}
        </Pre>
      </div>
    </div>
  )

}

const BaseAPIPage = ({ title, subtitle, url }) => {

  const [data, setData] = useState([]);

  useEffect(async () =>{
    const response = await fetch(url);
    const info = await response.json();
    setData(info);
    console.log(data);
  }, []);

  return(
    <div className={styles.container}>
      <SubHero>
        <Title id="title">{title}</Title>
        <span id="subtitle">{subtitle}</span>
      </SubHero>
      <div className={styles.content}>
        <section>
          {data.map(item => {
            return <Item key={item.id} item={item} />
          })}
        </section>
      </div>
    </div>
  )
}

export default BaseAPIPage;