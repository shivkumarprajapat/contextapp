import React from "react";
import { ShopContext } from "../context/ShopContext";

class Nav extends React.Component {

    static contextType = ShopContext;

    render() {
        const { products } = this.context;
        return <div>
            <h1>We have a Total Products :  {products.length}</h1>
        </div>
    }
}

export default Nav;