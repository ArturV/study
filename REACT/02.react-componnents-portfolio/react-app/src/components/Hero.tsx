import React from "react";
import { Button } from "./Button";

export const Hero = (props: any) => {
  return (
    <div className={props.header}>
      {props.title.length >= 1 && <h1>{props.title}</h1>}

      <p>{props.paragraph}</p>
      <Button title="Button" />
    </div>
  );
};
