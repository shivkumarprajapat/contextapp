import React,{useContext} from "react";
import { ShopContext } from "../context/ShopContext";

const ShopProducts = ()=> {
const myData = useContext(ShopContext)

const {products} = myData
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
  )
}

export default ShopProducts;
