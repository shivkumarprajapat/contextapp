import React from 'react'
import './App.css'
// import Languages from './components/languages'
import ShopContextProvider from './context/ShopContext'
import ShowProducts from './components/shopProducts'
import Nav from './components/Nav'
const App = () => {
  return (
    <div className='container mt-5'>
      <ShopContextProvider>
        <Nav/>
        <ShowProducts />
      </ShopContextProvider>
    </div>
  )
}

export default App
