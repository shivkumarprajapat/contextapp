import React, { createContext, useState } from 'react'

export const ContactData = createContext()

function ContactDataProvider(props) {
    const [contacts, setContacts] = useState([
        { id: 1, name: "Shiv", email: "shiv@gmail.com", phone: "111-222-333-0" },
        { id: 2, name: "Ram", email: "ram@gmail.com", phone: "111-222-333-0" },
        { id: 3, name: "Jack", email: "jack@gmail.com", phone: "111-222-333-0" }
    ])
    const addContact = (contact) => {
        setContacts([...contacts, contact])
    }
    const removeContact = id => {
        if(window.confirm("Are you really want to delete this contact ? ")){
        const filterred = contacts.filter(contact=> contact.id !== id)
        setContacts(filterred)

        }
    }
    return (
        <ContactData.Provider value={{ users: contacts, addContact,removeContact }}>
            {props.children}
        </ContactData.Provider>
    )
}

export default ContactDataProvider
