import React from "react";
import "../../../../style.scss"
import "./Button.scss";

const Button = (props) => {
    return (
        <button className={`btn ${props.className}`} onClick={props.onClick}>{props.buttonText}</button>
    );
}

export default Button;