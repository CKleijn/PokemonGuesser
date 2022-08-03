import React from "react";
import "../../../style.scss";
import "./Score.scss";

const Score = (props) => {
    return (
        <h3 className="score mt-3">
            Score: {props.score}
        </h3>
    );
}

export default Score;
