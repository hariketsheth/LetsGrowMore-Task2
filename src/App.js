import "./styles.css";
import logo from "./logo.png";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <>
      <header className="app">
        <title>Hariket Sheth : Task 2 </title>
        <img className="lgm" src={logo} alt="LetsGrowMore" />
        <div className="btn" onClick={getUsers}>
          Fetch Users
        </div>
      </header>
      <div className="task">
        <h3>Task Details: </h3>
        <p>Name: Hariket Sukesh Kumar Sheth</p>
        <p>Task: #2 - Intermediate Level Task </p>
        <p>
          Description: Create a React app with a button to fetch the Users from
          a given API.
        </p>
      </div>
      <div className="row">
        {users?.map((current, index) => {
          return (
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
