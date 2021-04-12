/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import CardProduct from '../CardProduct';

import { Title, SubTitle } from "../Title";
import useFilterProducts from '../../hooks/useFilterProducts'
import Styles from './styles.module.scss'

const ListOfProduct = ({ filter, products, h1 = true, title = null, isFiltered = false }) => {
  const router = useRouter()

  const { group } = router.query
  const [ListFilter, setListFilter] = useState(products);

  useEffect(() => {
    if (!isFiltered) {
      setListFilter(useFilterProducts(group || filter, products))
    }
  }, [products, group]);

  const getList = () => {
    if (isFiltered) {
      return (
        products.map((single) => { return <CardProduct key={single.id} product={single} /> })
      )
    } else if (ListFilter && ListFilter.map) {

        return (
          ListFilter.map((single) => { return <CardProduct key={single.id} product={single} /> })
        )
      }else { return <></>}
  }

  return (
    <div>

      <div className={Styles.list}>
        {h1 ? <Title className={Styles.title}>{title || filter}</Title>
          : <SubTitle className={Styles.title}>{title || filter}</SubTitle>}

        {getList()}
      </div>
    </div>

  )

}

export default ListOfProduct
