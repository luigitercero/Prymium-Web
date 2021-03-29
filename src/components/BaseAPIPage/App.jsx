/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect, useRef } from 'react';
import SubHero from '../SubHero/App';
import { Title, SubTitlen, Pre } from "../Title";

import styles from './styles.module.scss';

const Item = ({ item }) => {
  const { titulo, description } = item;
  const content = useRef();
  const arrow = useRef();
  let hasClicked = false;

  const onPress = () => {
    if (!hasClicked) {
      content.current.style.height = 'auto';
      arrow.current.style.transform = "rotate(90deg)";
    }else{
      content.current.style.height = '0';
      arrow.current.style.transform = "rotate(-90deg)";
    }

    hasClicked = !hasClicked;
  }

  return(
    <div className={styles.item}>
      <div onClick={onPress} className={styles.title_container}>
        <SubTitlen className={styles.item_title}>{titulo}</SubTitlen>
        <img ref={arrow} src="/images/icons/left-arrow.png" alt="arrow" />
      </div>
      <div className={styles.content_container} ref={content}>
        <div className={styles.item_content}>
          <Pre>
            {description}
          </Pre>
        </div>
      </div>
    </div>
  )

}

const BaseAPIPage = ({ title, subtitle, question }) => {

  const [data, setData] = useState([]);

  useEffect(() =>{
    setData(question)
  }, []);

  return(
    <div className={styles.container}>
      <SubHero isCentered>
        <Title id="title">{title}</Title>
        <span id="subtitle">{subtitle}</span>
      </SubHero>
      <div className={styles.content}>
        <section className={styles.items_container}>
          {data.map(item => {
            return <Item key={item.id} item={item} />
          })}
        </section>
      </div>
    </div>
  )
}

export default BaseAPIPage;