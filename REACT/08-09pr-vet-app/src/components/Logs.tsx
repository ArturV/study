import { useState, useEffect } from "react";
import axios from "axios";
import shortid from "shortid";

export const Logs = () => {
  const [logsCard, setLogsCard] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ENDPOINT = `https://glittery-dull-snickerdoodle.glitch.me/v1/logs/267`;

  const getData = async () => {
    try {
      const response = await axios.get(ENDPOINT);
      setLogsCard(response.data);
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

  return (
    <>
      <p>Logs</p>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div key={shortid.generate()} className="log-card">
          {logsCard.map((logCard) => (
            <div key={shortid.generate()} className="log-container">
              <h3>{logCard.status}</h3>
              <p>{logCard.description}</p>
              <p>{logCard.pet_id}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
