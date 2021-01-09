export default {
  home:{
    name:"Inicio",
    to:"/",
    id:1
  },
  products:{
    name:"Productos",
    to:"/store-lavatrastos-grifos-bidet-guatemala/",
    id:2
  },
  asks:{
    name:"Preguntas",
    to:"/",
    id:3
  },
  blog:{
    name:"Blog",
    to:"/",
    id:4
  },
  contact:{
    name:"Contacto",
    to:"/",
    id:5
  },
}
export const url ="https://lavatrastosprymium.com/";
export const getProducts = {
  url:`${url}/wp-json/pg/v1/novedades/100`
}
export const singleProductUrl = (product) => {
  return `${url}/wp-json/pg/v1/product/${product}`
}