import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Languages() {
  const [computerLanguages, setComputerLanguages] = useState([
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React" },
    { id: 3, name: "NodeJs" },
    { id: 4, name: "MongoDB" },
  ]);
  const addLanguage = (e) => {
    e.preventDefault();
    setComputerLanguages([...computerLanguages, { id: uuidv4(), name: "Redux" }]);
  };
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {computerLanguages.map((language) => (
            <tr key={language.id}>
              <td>{language.id}</td>
              <td>{language.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="submit"
        className="btn btn-primary"
        onClick={addLanguage}
        value="Add Language"
      />
    </React.Fragment>
  );
}
