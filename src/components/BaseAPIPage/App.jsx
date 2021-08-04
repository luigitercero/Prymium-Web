/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect, useRef } from 'react';
import SubHero from '../SubHero/App';
import { Title, SubTitlen, Pre } from "../Title";

import styles from './styles.module.scss';
import Link from 'next/link'

const Item = ({ item }) => {
  const { titulo, description, id } = item;
  const content = useRef();
  const arrow = useRef();
  let hasClicked = false;

  const onPress = () => {

  }

  return(

      <Link href={{
          pathname: '/preguntas/[id]',
          query: {
              id: id,
              titulo: titulo,
              description: description
          },
      }}>
        <div className={styles.item}>
          <div onClick={onPress} className={styles.title_container}>
            <SubTitlen className={styles.item_title}>{titulo}</SubTitlen>
            <img ref={arrow} src="/images/icons/right-arrow.png" alt="arrow" />

          </div>


          <div className={styles.content_container} ref={content}>
            <div className={styles.item_content}>
            </div>
          </div>
        </div>
      </Link>
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