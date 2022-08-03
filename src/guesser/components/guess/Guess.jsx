import React from "react";
import Button from "../../shared/components/elements/Button";
import "../../../style.scss";
import "./Guess.scss";

const Form = (props) => {
    const handleChange = (event) => {
        const { value } = event.target;

        props.setGuess(value);

        props.setFeedback({
            correct: "",
            wrong: "",
            noBalance: ""
        });
    }

    const submitGuess = (event) => {
        event.preventDefault();
        props.checkGuess(props.guess);
    }

    return (
        <form className="form">
            <input className="form-control mt-1" name="guess" value={props.guess} onChange={handleChange} placeholder="Who is this pokemon?" />
            <Button 
                className="mt-3"
                onClick={submitGuess}
                buttonText={"Submit"}
            />
        </form>
    );
}

export default Form;
