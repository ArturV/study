import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainRouter } from "./components/MainRouter";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <MainRouter>
        <button>Submit</button>
      </MainRouter>
    </div>
  );
}

export default App;
