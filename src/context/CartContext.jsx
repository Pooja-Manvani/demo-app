import React from "react";


export const  Products=[
  {
    id:1,
    image:"Product1.jpg",
    price:245,
    title:"Versace"
  },
  {
    id:2,
    image:"Product2.jpg",
    price:250,
    title:"Cannel"      
  },
  {
    id:3,
    image:"Product3.jpg",
    price:345,
    title:"Lovender"
  },
  {
    id:4,
    image:"Product4.jpg",
    price:455,
    title:"Fly-shy"
  },
  {
    id:5,
    image:"Product5.jpg",
    price:200,
    title:"Sunna-Gold"
  },
  {
    id:6,
    image:"Product1.jpg",
    price:245,
    title:"Versace"
  },
  {
    id:7,
    image:"Product2.jpg",
    price:250,
    title:"Cannel"
  },
  {
    id:8,
    image:"Product3.jpg",
    price:345,
    title:"Lovender"
  },
  {
    id:9,
    image:"Product4.jpg",
    price:455,
    title:"Fly-shy"
  },
  {
    id:10,
    image:"Product5.jpg",
    price:200,
    title:"Sunna-Gold"
  }
]

export default React.createContext({
  products: Products,
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {}
});