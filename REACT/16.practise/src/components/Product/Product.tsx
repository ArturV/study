import { type FC, useState } from "react";
import type { TProductProps } from "./types";

export const Product: FC<TProductProps> = ({ product }) => {
  const [details, setDetails] = useState(false);
  return (
    <div className="product-container">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="productImage"
        height="200px"
      />
      <h4>{product.price} &euro;</h4>
      <button onClick={() => setDetails((prev) => !prev)}>
        {details ? "Hide description" : "Show description"}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};
