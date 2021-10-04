import React, { createContext} from 'react'
import products from '../data/products';

export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
    let state ={products}
        return (
            <ShopContext.Provider value={{ ...state}}>
                {props.children}
            </ShopContext.Provider>
        )
}

export default ShopContextProvider