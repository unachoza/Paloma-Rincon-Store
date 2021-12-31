import React from "react";
import Product from "../Product/Product"
import "./ProductList.css"

const ProductList = ( props) => {
  console.log(props)
  return (
    <div className="list">
      {props.products.map((prod) => {
        console.log(prod)
        return  <Product prod={prod} />
      })}
    </div>
  );
};

export default ProductList;
