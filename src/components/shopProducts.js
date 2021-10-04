import React from "react";
import { ShopContext } from "../context/ShopContext";

const ShopProducts = ()=> {

    return (
      <ShopContext.Consumer>
        {(contextData) => {
          const { products,doSome } = contextData;
          console.log(doSome())
          return (
            <div>
              <h1>All Products</h1>
              {products.map((pro) => (
                <div key={pro.id}>
                  <h3>Name: {pro.name}</h3>
                  <h4>{pro.price}</h4>
                </div>
              ))}
            </div>
          );
        }}
      </ShopContext.Consumer>
    );
}

export default ShopProducts;
