import React, {useState}from 'react';
import Head from '@hooks/useSEO'
import {sobreAzulejo, url} from "../../src/routes/Config";
import ListCards from "../../src/components/ListCards";


const Principal = () => {



    const [products, setProducts] = useState(  [
        {
            id: 0,
            imagen: "https://luisazurdia.me/wp-content/uploads/2021/03/3043R-225-1.jpg",
            alt:"Lavatrastos",
            title:"Lavatrastos",
            link:"/tienda/lavatrastos"

        },

        {
            id: 1,
            imagen: "https://luisazurdia.me/wp-content/uploads/2020/06/SD-200-ACCESORIOS.jpg",
            alt:"Bidets",
            title:"Bidets",
            link:"/tienda/bidets"

        },

        {
            id: 2,
            imagen: "https://luisazurdia.me/wp-content/uploads/2020/06/HJ-3123-1.jpg",
            alt:"Grifos",
            title:"Grifos",
            link:"/tienda/grifos"

        },

        {
            id: 3,
            imagen: "https://luisazurdia.me/wp-content/uploads/2021/04/Matel-Metalico01-300x300.jpg",
            alt:"Accesorios",
            title:"Accesorios",
            link:"/tienda/accesorios"

        },

        {
            id: 4,
            imagen: "https://luisazurdia.me/wp-content/uploads/2020/06/5144T-300x300.jpg",
            alt:"Todos",
            title:"Todos",
            link:"/tienda/tienda"

        }

    ]);


    return (
        <Head
            title="Todos los Productos | Lavatrastos | Grifos | Bidets"
            description="Encuntra accesorios, lavatrastos de lujo, fregaderos o bidets de grandes fosas y de acero inoxidable 202 y 304 para tu nueva cocina, todo los productos calibre 1.2mm el más grueso del mercado"
            img={sobreAzulejo()}
            url={url}
        >

            <div>


                <ListCards products={products}></ListCards>

            </div>
        </Head>
    );

};

export default Principal;