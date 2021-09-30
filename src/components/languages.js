import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import InputHook from "./inputHook";
export default function Languages() {

  const [computerLanguages, setComputerLanguages] = useState([

    { id: 1, name: "JavaScript", email: "example@gmail.com" },
    { id: 2, name: "React", email: "example1@gmail.com" },
    { id: 3, name: "NodeJs", email: "example2@gmail.com" },
    { id: 4, name: "MongoDB", email: "example3@gmail.com" },
  ]);

  // Custom Hooks
  const [name, setName, clearName] = InputHook("");
  const [email, setEmail, clearEmail] = InputHook("");
  // ./Custom Hooks

  const addLanguage = e => {
    e.preventDefault();
    setComputerLanguages(
      [...computerLanguages,
      {
        id: uuidv4(),
        name: name, email: email
      }
      ]);
    clearName("")
    clearEmail("")
  };

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {computerLanguages.map((language) => (
            <tr key={language.id}>
              <td>{language.id}</td>
              <td>{language.name}</td>
              <td>{language.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={addLanguage}>
        <div className="form-group">
          <input type="text"
            className='form-control'
            value={name}
            onChange={setName}
            placeholder='Add Language' />
        </div>
        <div className="form-group">
          <input type="email"
            className='form-control'
            value={email}
            onChange={setEmail}
            placeholder='Add Email' />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-primary"
            value="Add Language"
          />
        </div>
      </form>
    </React.Fragment>
  );
}