import React from "react";
import style from './styles.module.scss'
import CardProduct from "@components/CardProduct";
import {Title} from "@components/Title";
import Styles from "../ListOfProduct/styles.module.scss";

const ListCards = ({products}) => {
  return (
    <div>
      <div className={style.list}>
        <Title className={Styles.title}>Productos</Title>
      </div>

      <div className={style.list}>
        {
          products.map(
            (element) => {
              return <CardProduct key={element.id} product={element} isCatalog></CardProduct>
            }
          )
        }
      </div>
    </div>
  )
}

export default ListCards;