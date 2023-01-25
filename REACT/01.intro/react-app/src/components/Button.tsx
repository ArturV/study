import React from "react";
import "./Button.css";

export const Button = (props: any) => {
  return (
    <div className="btn-wrapper">
      <button className="btn" type="button">
        {props.text}
      </button>
    </div>
  );
};
