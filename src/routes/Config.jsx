export default {
  home:{
    name:"Inicio",
    to:"/",
    id:1
  },
  products:{
    name:"Productos",
    to:"/tienda/",
    id:2
  },
  asks:{
    name:"Preguntas",
    to:"/preguntas",
    id:3
  },
  blog:{
    name:"Blog",
    to:"/",
    id:4
  },
  contact:{
    name:"Contacto",
    to:"/contacto",
    id:5
  },
}
export const url ="https://lavatrastosprymium.com/";
export const getProducts = {
  url:`${url}wp-json/pg/v1/novedades/100`
}
export const getQuestion = {
  url: `${url}wp-json/pg/v1/preguntas/`
}
export const getSlidersSinks= {
  url: `${url}wp-json/pg/v1/sliders/fregaderos`
}
export const getSlidersBidet= {
  url: `${url}wp-json/pg/v1/sliders/bidets`
}
export const getCatergories = {
  url: `${url}wp-json/pg/v1/categories`
}

/**
 * relevante
 * @param {relevante} product 
 */
export const getRecomended = (relevante) => {
  return `${url}wp-json/pg/v1/per-category/${relevante}`
}
export const singleProductUrl = (product) => {
  return `${url}wp-json/pg/v1/product/${product}`
}

export const singleCategoryUrl = (category) => {
  return `${url}wp-json/pg/v1/per-category/${category}`
}