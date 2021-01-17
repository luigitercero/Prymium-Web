/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect, useRef } from 'react';
import SubHero from '../SubHero/App';
import { Title, SubTitle2, Pre } from "../Title";

import styles from './styles.module.scss';

const Item = ({ item }) => {
  const { titulo, description } = item;
  const content = useRef();
  let hasClicked = false;

  const onPress = () => {
    if (!hasClicked) {
      content.current.style.height = 'auto';
    }else{
      content.current.style.height = '0';
    }

    hasClicked = !hasClicked;
  }

  return(
    <div className={styles.item}>
      <div onClick={onPress}>
        <SubTitle2 className={styles.item_title}>{titulo}</SubTitle2>
      </div>
      <div className={styles.item_content} ref={content}>
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