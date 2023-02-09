import axios from "axios";
import shortid from "shortid";
import { useEffect, useState } from "react";
import { Button } from "./Buttons/Button";
import { Logs } from "./Logs";

export const Pets = () => {
  const [petsCard, setPetsCard] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ENDPOINT = `https://glittery-dull-snickerdoodle.glitch.me/v1/pets`;

  const getData = async () => {
    try {
      const response = await axios.get(ENDPOINT);
      setPetsCard(response.data);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1_000);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleRemovePet = (id: any) => {
    const shouldDelete = window.confirm("Are you want to delete?");

    if (!shouldDelete) {
      return;
    }

    axios
      .delete(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => console.error(error));
  };

  const handleViewLog = (id: any) => {
    axios
      .get(`https://glittery-dull-snickerdoodle.glitch.me/v1/logs/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => console.error(error));

    return <p>Loading...</p>;
  };

  return (
    <>
      <p>Pets</p>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div key={shortid.generate()} className="pet-card">
          {petsCard.map((petCard) => (
            <div key={shortid.generate()} className="pet-container">
              <h3>{petCard.name}</h3>
              <p>{petCard.dob}</p>
              <p>{petCard.client_email}</p>
              <Button
                title="View log"
                onClick={() => handleViewLog(petCard.id)}
              />
              <Button
                title="Delete"
                onClick={() => handleRemovePet(petCard.id)}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
