import React from "react";
import "./Product.css"

const Product = ( props) => {
  return (
    <div className="one">
      <h1>{props.prod.title}</h1> 
      <img src={props.prod.imageURL} alt="" />
  
    </div>
  );
};

export default Product;