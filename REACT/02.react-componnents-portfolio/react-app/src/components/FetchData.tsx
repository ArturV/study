import { useEffect, useState } from "react";

export const FetchData = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const ENDPOINT = "https://golden-whispering-show.glitch.me";

  const removeProduct = (id: number) => {
    setData((oldValues) => {
      return oldValues.filter((data) => data.id !== id);
    });
  };

  const GetData = async () => {
    const conn = await fetch(ENDPOINT)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => {
        console.error(err.message);
      });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <h2>Fetch data from server</h2>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="grid-container">
          {data &&
            data.map((product) => {
              return (
                <div key={product.id} className="product-container">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <h2 className="red">&euro;{product.price}</h2>
                  <button onClick={() => removeProduct(product.id)}>
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};
