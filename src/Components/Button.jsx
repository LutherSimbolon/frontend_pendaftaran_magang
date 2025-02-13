import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      <Link to={props.navigate} target={props.target}>
        <button
          className={`${props.style} flex justify-center items-center gap-2 ${props.bgColor} ${props.textColor} ${props.paddingY} ${props.paddingX} rounded-lg font-lato`}
          onClick={props.onClick}
        >
          {props.icon}
          <h1>{props.children}</h1>
        </button>
      </Link>
    </>
  );
};

export default Button;
