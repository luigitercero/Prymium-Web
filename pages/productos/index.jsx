import React, {useState}from 'react';
import Head from '@hooks/useSEO'
import {sobreAzulejo, url} from "@routes/Config";
import ListCards from "@components/ListCards";

const Principal = () => {

  const [products, setProducts] = useState([
    
    {
      id: 0,
      imagen: "https://prymium.nuevoestilosa.com/wp-content/uploads/2021/03/3043R-225-1.jpg",
      alt:"Lavatrastos",
      title:"Lavatrastos",
      link:"/tienda/lavatrastos"
    },

    {
      id: 1,
      imagen: "https://prymium.nuevoestilosa.com/wp-content/uploads/2020/06/HJ-3123-1.jpg",
      alt:"Mezcladoras",
      title:"Mezcladoras",
      link:"/tienda/mezcladoras"
    },

    {
      id: 2,
      imagen: "https://prymium.nuevoestilosa.com/wp-content/uploads/2021/04/Matel-Metalico01-300x300.jpg",
      alt:"Accesorios",
      title:"Accesorios",
      link:"/tienda/accesorios"
    },

    {
      id: 3,
      imagen: "https://prymium.nuevoestilosa.com/wp-content/uploads/2020/06/SD-200-ACCESORIOS.jpg",
      alt:"Bidets",
      title:"Bidets",
      link:"/tienda/bidets"
    },

    {
      id: 4,
      imagen: " https://prymium.nuevoestilosa.com/wp-content/uploads/2021/12/5003A.png",
      alt:"Grifos de Baño",
      title:"Grifos de Baño",
      link:"/tienda/bath"
    },
      
    {
      id: 5,
      imagen: "https://prymium.nuevoestilosa.com/wp-content/uploads/2022/07/DUCHA-NEGRA-DORADA-300x300-1.jpg",
      alt:"Duchas",
      title:"Duchas",
      link:"/tienda/duchas/"
    },

    {
      id: 6,
      imagen: "https://prymium.nuevoestilosa.com/wp-content/uploads/2022/07/01-Campana-extractora.jpg",
      alt:"Extractores",
      title:"Extractores",
      link:"/tienda/extractores/"
    },

    {
      id: 7,
      imagen: "https://prymium.nuevoestilosa.com/wp-content/uploads/2021/07/7807F-01-300x300.png",
      alt:"Todos",
      title:"Todos",
      link:"/tienda/"
    },
      
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