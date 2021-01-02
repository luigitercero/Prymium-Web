import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CardProduct from './CardProduct';
import '../styles/components/listOfProduct.scss';
import ContextApp from '../context/AppContext';
import { Title } from "./Title";


const ListOfProduct = () => {
  const { products, getGroup, groupFilterd } = useContext(ContextApp);
  const { group } = useParams();

  useEffect(() => {
    getGroup(group);
  }, [products, group]);

  const getList = () => {
    return (
      groupFilterd.map((single) => { return <CardProduct key={single.id} product={single} /> }
      )
    )
  }

  return (
    <div>
      
      <div className="list-item-container">
        <Title className="title-list-of-porudct">{group}</Title>
        {getList()}
      </div>
    </div>

  )

}

export default ListOfProduct
