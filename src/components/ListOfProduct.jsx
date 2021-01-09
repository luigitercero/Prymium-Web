import React, { useContext, useEffect,useState } from 'react';
import { useParams } from "react-router-dom";
import CardProduct from './CardProduct';
import '../styles/components/listOfProduct.scss';
import ContextApp from '../context/AppContext';
import { Title } from "./Title";
import useFilterProducts from '../hooks/useFilterProducts'

const ListOfProduct = ({filter}) => {
  const { products  } = useContext(ContextApp);
  const { group } = useParams();
  const [ListFilter, setListFilter] = useState(products);

  useEffect(() => {
    
    setListFilter(useFilterProducts(group||filter,products))
  }, [products, group]);

  const getList = () => {
    return (
      ListFilter.map((single) => { return <CardProduct key={single.id} product={single} /> }
      )
    )
  }

  return (
    <div>
      
      <div className="list-item-container">
        <Title className="title-list-of-porudct">{group||filter}</Title>
        {getList()}
      </div>
    </div>

  )

}

export default ListOfProduct
