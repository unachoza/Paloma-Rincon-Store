import React from "react";

const Product = ( props) => {
  console.log(props.prod.id)
  return (
    <div className="one">
      {props ? <h1>{props.prod.id}</h1> : null}
  
    </div>
  );
};

export default Product;