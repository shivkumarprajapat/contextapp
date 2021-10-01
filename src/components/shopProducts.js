import React from "react";
import { ShopContext } from "../context/ShopContext";

class ShopProducts extends React.Component {

    static contextType = ShopContext;

    render() {
        const { products } = this.context;
        return <div>
            <h1>All Products</h1>
            {
                products.map(pro => (
                    <div key={pro.id}>
                        <h3>Name: {pro.name}</h3>
                        <h4>{pro.price}</h4>
                    </div>
                ))
            }
        </div>
    }
}

export default ShopProducts;