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

export const url ="https://luisazurdia.me/";
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

export const preguntas = () => {
  return `${url}wp-json/pg/v1/preguntas/`
}

export const feedback = () => {
  return `${url}wp-json/contact-form-7/v1/contact-forms/15/feedback`
}

export const sobreAzulejo = () => {
  return `${url}wp-content/uploads/2020/09/7807-sobre-azulejo.jpeg`
  
}

export const getOneQuestion = (idQuestion) => {
  return `${url}wp-json/pg/v1/preguntas/${idQuestion}`
}