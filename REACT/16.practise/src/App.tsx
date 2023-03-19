import axios from "axios";
import React, { FormEventHandler, useEffect, useState } from "react";
import "./App.css";
import { Product } from "./components/Product/Product";
import { TProduct } from "./components/Product/types";
import { products } from "./data/products";

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

  const [products, setProducts] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setError("");
      setIsLoading(true);
      const response = await axios.get<TProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as Error;
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      {isLoading && <p>Data is is Loading</p>}
      {error && <p>{error}</p>}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {/* <Product product={products[0]} />
      <Product product={products[1]} /> */}

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
