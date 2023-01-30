import React from "react";

import "./App.css";
import { FetchData } from "./components/FetchData";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero
          header="hero-banner"
          title=""
          paragraph="lorem about text in two"
        />
      </header>

      <main>
        <section>
          <Portfolio />
          <FetchData />
        </section>
      </main>
    </div>
  );
}

export default App;
