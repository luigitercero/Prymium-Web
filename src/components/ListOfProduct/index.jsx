import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import CardProduct from '../CardProduct';

import { Title, SubTitle } from "../Title";
import useFilterProducts from '../../hooks/useFilterProducts'
import Styles from './styles.module.scss'

const ListOfProduct = ({ filter, products, h1 = true }) => {
  const router = useRouter()

  const { group } = router.query
  const [ListFilter, setListFilter] = useState(products);

  useEffect(() => {
    setListFilter(useFilterProducts(group || filter, products))
  }, [products, group]);

  const getList = () => {
    return (
      ListFilter.map((single) => { return <CardProduct key={single.id} product={single} /> }
      )
    )
  }

  return (
    <div>

      <div className={Styles.list}>
        {h1 ? <Title className={Styles.title}>{group || filter}</Title>
          : <SubTitle className={Styles.title}>{group || filter}</SubTitle>}

        {getList()}
      </div>
    </div>

  )

}

export default ListOfProduct
