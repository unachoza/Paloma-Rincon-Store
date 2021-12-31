import React from "react";
import "./Product.css"

const Product = ( props) => {
  return (
    <div className="one">
      <img src={props.prod.imageURL} alt="" />
      <h1 className="title-and-price">{props.prod.title} {props.prod.price}</h1> 
  
    </div>
  );
};

export default Product;