import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ThemeContext } from "../context/ThemeContext";

const ShopProducts = () => {
  const myData = useContext(ShopContext)
  const themecontext =useContext(ThemeContext)
  console.log(themecontext)

  const { products } = myData
  return (
    <div style={{backgroundColor:themecontext.bgColor,color:themecontext.textColor}}>
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
