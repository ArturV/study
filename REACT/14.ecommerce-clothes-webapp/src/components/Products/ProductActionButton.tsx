import { Button } from "@mui/material";
import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import type { TProductActionButtonProps } from "./types";

export const ProductActionButton: FC<TProductActionButtonProps> = ({
  title,
  type,
  productId,
  color,
  label,
}) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <Button
      variant="outlined"
      color={color}
      aria-label={label}
      sx={{ width: "30px", height: "30px" }}
      onClick={() => dispatch({ type, payload: { productId } })}
    >
      {title}
    </Button>
  );
};
