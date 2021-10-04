import React, { createContext } from 'react'
import products from '../data/products'
export const ShopContext = createContext();

class ShopContextProvider extends React.Component {
    state = {
        products

    }
    doSomthing=()=>{
        return "Hello dosomthing"
    }
    render() {
        return (
            <ShopContext.Provider value={{ ...this.state, doSome: this.doSomthing}}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

export default ShopContextProvider