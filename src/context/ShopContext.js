import React, { createContext, useState } from "react";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const products = useState({
    products: [
      { id: 1, name: "Laptop", price: "200" },
      { id: 2, name: "Mobile", price: "300" },
      { id: 3, name: "HP Computer", price: "500" },
      { id: 4, name: "Iphone10", price: "700" },
      { id: 4, name: "Watch", price: "200" },
    ],
  });
  const doSomthing = () => {
    return "Hello dosomthing";
  };
  return (
    <ShopContext.Provider value={{ ...products, doSome: doSomthing }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
