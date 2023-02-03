import { useEffect, useState } from "react";

export const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const isImportantValue = randomNumber > 50;

  useEffect(() => {
    //to do: try catch

    const products = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (result) => result
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    //  alert("welcome");
  }, []); // kai masyve keiciasi reiksmes vykdyk koda f-joje

  useEffect(() => {
    alert(randomNumber);
  }, [randomNumber, description]);

  return (
    <>
      {isLoading ? ( // kol krausis rodys loading, o tada turini
        <p>Loading</p>
      ) : (
        <>
          <p className={isImportantValue ? "importantValue" : "boldValue"}>
            {randomNumber.toFixed()}
          </p>
          {isImportantValue && <p>Important client</p>}
          <button
            onClick={() => {
              const magicNumber = Math.random() * 100;
              setRandomNumber(magicNumber);
            }}
          >
            Generator
          </button>
          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </>
      )}
      ;
    </>
  );
};
