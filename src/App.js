import React from 'react'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
import ContactDataProvider from './Context/ContactData'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <ContactDataProvider>
          <ContactForm/>
          <Contacts />
        </ContactDataProvider>

      </div>
    </>
  )
}

export default App
