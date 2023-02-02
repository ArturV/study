import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const VisitCount = () => {
  const { pathname } = useLocation(); // arba: window.location
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1); // kaiciuojame kiek akrtu buvo paspausta ant rout'u
    console.log({ pathname });
  }, [pathname]); // tuscias masyvas reiskia = veikia tik uzkrovus puslapi

  return <p>{count}</p>;
};
