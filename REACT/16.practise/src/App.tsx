import React, { FormEventHandler, useState } from "react";
import "./App.css";

export const App = () => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log({ nameInput, passwordInput });
    console.log(userData);
  };

  const handleUserDataChange = (value: string, key: "email" | "password") => {
    setUserData((prevUserData) => ({ ...prevUserData, [key]: value }));
  };

  return (
    <div className="App">
      <h2>pasidaryt forma ir islogint duomenis po Submit</h2>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={nameInput}
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Pass"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <h2>tas pats Su vienu stat'u</h2>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => {
            handleUserDataChange(e.target.value, "email");
          }}
        />
        <input
          type="password"
          placeholder="Pass"
          value={userData.password}
          onChange={(e) => {
            handleUserDataChange(e.target.value, "password");
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
