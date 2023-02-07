import axios from "axios";
import { useState } from "react";
import { Button } from "./components/Button";

const SERV = `https://believed-shore-vanadium.glitch.me/`;

export const Add = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [people, setPeople] = useState<number | null>(null);

  const resetForm = () => {
    setPrice(null);
    setPeople(null);
  };

  const addRow = () => {
    axios
      .post(SERV, { price, people })
      .then(() => resetForm())
      .catch((error) => console.error(error));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addRow();
      }}
    >
      <input
        type="number"
        placeholder="Price"
        value={price ?? ""}
        onChange={(e) => {
          let newPrice: string | null | number = e.target.value;

          if (newPrice === "") {
            newPrice = null;
          } else {
            newPrice = +newPrice;
          }
          setPrice(newPrice);
        }}
      />

      <input
        type="number"
        placeholder="People"
        value={people ?? ""}
        onChange={(e) => {
          setPeople(+e.target.value);
        }}
      />
      <Button />
    </form>
  );
};
