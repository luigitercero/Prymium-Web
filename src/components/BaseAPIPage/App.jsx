import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import SubHero from '../SubHero/App';
import { Title, SubTitlen } from "../Title";

import styles from './styles.module.scss';

const Item = ({ item }) => {
  const { titulo } = item;
  const content = useRef();
  const arrow = useRef();

  return(

    <Link href="/preguntas/[id]" as={`/preguntas/${item.id}`}>
      <div className={styles.item}>
        <div className={styles.title_container}>
          <SubTitlen className={styles.item_title}>{titulo}</SubTitlen>
          <img ref={arrow} src="/images/icons/right-arrow.png" alt="arrow" />

        </div>


        <div className={styles.content_container} ref={content}>
          <div className={styles.item_content} />
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

    <div className={styles.body}>

      <div className={styles.center}>
        <div className={styles.contenido}>

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
        
        </div>
      </div>

    </div>
  )
}

export default BaseAPIPage;