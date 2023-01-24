import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import { Logo } from "./Logo";
import "./App.css";
import { Form } from "./Form";

function App() {
  const [i, setI] = useState(0);
  const [description, setDescription] = useState("");

  console.log(i);

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <header>
        <Logo />

        <div id="meniu">
          <ul>
            <li>
              <a href="#" title="">
                Home
              </a>
            </li>
            <li>
              <a href="#" title="">
                Product
              </a>
            </li>
            <li>
              <a href="#" title="">
                Company
              </a>
            </li>
            <li>
              <a href="#" title="">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div id="header-img">
          <h1>Header img</h1>
        </div>
      </header>
      <div id="column-3">
        <div id="about">
          <h2>About</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eveniet expedita aliquam sit! Magnam totam nobis ullam unde, eaque
          mollitia soluta, reiciendis quas vel, possimus illo error similique
          delectus quos.
        </div>
        <div id="company">
          <h2>Company</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          tempore a minus corporis rem obcaecati repudiandae, delectus deserunt,
          voluptate similique saepe maxime consectetur rerum at maiores eaque
          iste distinctio ratione!
        </div>
        <div id="services">
          <h2>Services</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          modi, quas sunt enim praesentium ipsa voluptates quos quia molestiae,
          odit ipsum officiis ea eligendi perspiciatis harum, excepturi nisi id
          facilis.
        </div>
      </div>
      <div id="column-2">
        <div id="content">
          <h2>Content</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et
            ipsam nulla, blanditiis quaerat temporibus debitis, accusamus
            tenetur fugiat, perspiciatis consequuntur similique! Facere harum
            saepe omnis totam expedita exercitationem beatae.
          </p>
          <h3>Sub-header</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, non
            labore culpa amet in, ut nam maxime mollitia quisquam reiciendis,
            nostrum qui voluptas at nulla aspernatur dicta. Cumque, beatae
            neque? Aut nihil numquam mollitia voluptatibus quibusdam cumque
            totam porro temporibus maxime quas impedit est tempora eligendi
            natus, aliquam quae eius obcaecati necessitatibus perferendis ex
            expedita quasi. In, rem perferendis! Expedita?
          </p>
        </div>
        <div id="navigation">
          <div id="navigation-meniu">
            <h2>Navigatin</h2>
            <ul>
              <li>
                <a href="#" title="">
                  Home
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Product
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Company
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          setI(i + 1); // naudoti tik pradiniams projektams
        }}
      >
        Submit
      </button>

      {i}
      <p>i antruoju: {i ** 2}</p>
      <p>{description}</p>

      <Form />
    </div>
  );
}

export default App;
