import React from 'react'
import './App.css'
import ShopContextProvider from './context/ShopContext'
import ShowProducts from './components/shopProducts'
import Nav from './components/Nav'
import ThemeContextProvider from './context/ThemeContext'
const App = () => {
  return (
    <div className='container mt-5'>
      <ShopContextProvider>
        <Nav/>
        <ThemeContextProvider>
        <ShowProducts />
        </ThemeContextProvider>
      </ShopContextProvider>
    </div>
  )
}

export default App
