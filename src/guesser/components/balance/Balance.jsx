import React from "react";
import "../../../style.scss";
import "./Balance.scss";

const Balance = (props) => {
    return (
        <h3 className="balance">
            Balance: {props.balance}
        </h3>
    );
}

export default Balance;
