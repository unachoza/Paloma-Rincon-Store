import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = (props) => {
  return (
    <div className="list">
      {props.products.map((prod, i) => {
        return <Product key={i} prod={prod} />;
      })}
    </div>
  );
};

export default ProductList;
