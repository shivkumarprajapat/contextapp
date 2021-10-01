import React, { createContext } from 'react'

export const ShopContext = createContext();

class ShopContextProvider extends React.Component {
    state = {
        "products": [
            { id: 1, name: "Laptop", price: '200' },
            { id: 2, name: "Mobile", price: '300' },
            { id: 3, name: "HP Computer", price: '500' },
            { id: 4, name: "Iphone10", price: '700' },
            { id: 4, name: "Watch", price: '200' }
        ]

    }
    render() {
        return (
            <ShopContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

export default ShopContextProvider