import React, { useContext } from 'react'
import InputHook from '../Hooks/InputHook'
import { ContactData } from '../Context/ContactData'
import { v4 as uuidv4 } from 'uuid';
const ContactForm = () => {
    const { addContact } = useContext(ContactData)
    const [name, setName, resetName] = InputHook("");
    const [email, setEmail, resetEmail] = InputHook("");
    const [phone, setPhone, resetPhone] = InputHook("");

    const addNewContact = (e) => {
        e.preventDefault();
        addContact({ id: uuidv4(), name: name, email: email, phone: phone })
        resetName();
        resetEmail();
        resetPhone();
    }
    return (
        <form onSubmit={addNewContact}>
            <div className="form-group">
                <h3>Add Contact</h3>
            </div>
            <div className="form-group">
                <input type="text" name='name' className='form-control' placeholder='Enter name' value={name} onChange={setName} />
            </div>
            <div className="form-group">
                <input type="email" name='email' className='form-control' placeholder='Enter Email' value={email} onChange={setEmail} />
            </div>
            <div className="form-group">
                <input type="text" name='phone' className='form-control' placeholder='Enter Phone' value={phone} onChange={setPhone} />
            </div>
            <div className="form-group">
                <input type="submit" name='phone' className='btn btn-info btn-block' />
            </div>
        </form>
    )
}

export default ContactForm
