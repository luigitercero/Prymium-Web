import React from "react";
import style from './styles.module.scss'
import CardProduct from "../CardProduct";
import {Title} from "../Title";
import Styles from "../ListOfProduct/styles.module.scss";

const ListCards = ({products}) => {

    return (

        <div>
            <div className={style.list}>

                <Title className={Styles.title}>Productos</Title>

            </div>
        <div className={style.list}>


            <CardProduct product={products[0]} isCatalog></CardProduct>
            <CardProduct product={products[1]} isCatalog></CardProduct>
            <CardProduct product={products[2]} isCatalog></CardProduct>
            <CardProduct product={products[3]} isCatalog></CardProduct>

        </div>
        </div>




    )
}

export default ListCards;