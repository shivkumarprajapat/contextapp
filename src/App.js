import React from 'react'
import './App.css'
// import Languages from './components/languages'
import ShopContextProvider from './context/ShopContext'
import ShowProducts from './components/shopProducts'
const App = () => {
  return (
    <div className='container mt-5'>
      <ShopContextProvider>
        <ShowProducts />
      </ShopContextProvider>
    </div>
  )
}

export default App
