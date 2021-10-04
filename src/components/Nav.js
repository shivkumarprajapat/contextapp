import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Nav =()=> {

    const  myData = useContext(ShopContext)

        const { products } = myData
        return <div>
            <h1>We have a Total Products :  {products.length}</h1>
        </div>
    }

export default Nav;