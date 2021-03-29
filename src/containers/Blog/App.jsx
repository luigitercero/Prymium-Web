/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import SubHero from '../../components/SubHero/App'
import { Title, Pre } from '../../components/Title';
import {preguntas} from '../../routes/Config';

const Blog = () => {
  const API_URL = preguntas;
  const [data, setData] = useState({
    titulo:"",
    description:""
  });

  useEffect(async () =>{
    const response = await fetch(API_URL);
    const info = await response.json();
    setData(info[0]);
  }, []);

  return(
    <div className="container">
      <SubHero>
        <Title id="title">Lavatrastos Prymium</Title>
        <span id="subtitle">{data.titulo}</span>
      </SubHero>
      <div className="content">
        <section>
          <h1>{data.titulo}</h1>
          <Pre>
            {data.description}
          </Pre>
        </section>
      </div>
    </div>
  )
}

export default Blog;