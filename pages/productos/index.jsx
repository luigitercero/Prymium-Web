import React, {useState} from 'react';
import Head from '@hooks/useSEO'
import {getProducts, sobreAzulejo, url} from "../../src/routes/Config";
import All from "../../src/containers/AllProduct";
import AllProduct from "../../src/containers/AllProduct";
import CardProduct from "../../src/components/CardProduct";

export const getStaticProps = async () => {
    // eslint-disable-next-line no-undef
    const response = await fetch(getProducts.url)
    const products = await response.json()

    return {
        props: {
            products
        }
    }
}

const Principal = ({ products }) => {

    const [productList, setProductList] = useState(products);




    return (
        <Head
            title="Todos los Productos | Lavatrastos | Grifos | Bidets"
            description="Encuntra accesorios, lavatrastos de lujo, fregaderos o bidets de grandes fosas y de acero inoxidable 202 y 304 para tu nueva cocina, todo los productos calibre 1.2mm el más grueso del mercado"
            img={sobreAzulejo()}
            url={url}
        >



        </Head>
    );

};

export default Principal;