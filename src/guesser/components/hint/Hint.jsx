import React from "react";
import Button from "../../shared/components/elements/Button";

import "../../../style.scss";
import "./Hint.scss";

const Hint = (props) => {
    const buyHint = () => {
        if (props.balance >= 10) {
            props.setBalance((prevBalance) => prevBalance -= 10);
            getHint();
        } else {
            props.setFeedback({
                correct: "",
                wrong: "",
                noBalance: "You don't have enough balance!"
            });
        }
    }

    const getHint = async () => {
        let lettersOfPokemonName = props.name.split("");

        const randomNumberArray = [];

        if (Array.isArray(props.hintHistory) && props.hintHistory.length === 0) {
            const randomNumber = Math.floor(Math.random() * lettersOfPokemonName.length);

            randomNumberArray.push(randomNumber);

            props.setHintHistory([randomNumber]);
        } else {
            const newNumber = await generateRandomWithExclusion(props.hintHistory, lettersOfPokemonName);

            randomNumberArray.push(newNumber);

            props.setHintHistory((prevNumbers) => [
                ...prevNumbers,
                newNumber
            ]);
        }

        const randomNumber = randomNumberArray[0];

        const letter = lettersOfPokemonName[randomNumber];

        for (let i = 0; i < lettersOfPokemonName.length; i++) {
            i === randomNumber ? lettersOfPokemonName[i] = letter : lettersOfPokemonName[i] = "_";
        }

        mergeHints(lettersOfPokemonName, letter, randomNumber);
    }

    const mergeHints = (lettersOfPokemonName, letter, index) => {
        if (props.hint !== "") {
            let lettersOfPrevHints = props.hint.split("");

            for (let i = 0; i < lettersOfPrevHints.length; i++) {
                if (lettersOfPrevHints[i] === "_") {
                    if (i === index) {
                        lettersOfPrevHints[i] = letter;
                    }
                }
            }

            setHint(lettersOfPrevHints);
        } else {
            for (let i = 0; i < lettersOfPokemonName.length; i++) {
                i === index ? lettersOfPokemonName[i] = letter : lettersOfPokemonName[i] = "_";
            }

            setHint(lettersOfPokemonName);
        }
    }

    const setHint = (letters) => {
        let pokemonNameWithHint = letters.toString();

        pokemonNameWithHint = pokemonNameWithHint.replaceAll(",", "");

        props.setHint(pokemonNameWithHint);
    }

    const generateRandomWithExclusion = async (exclude, lettersOfPokemonName) => {
        let ranNum = Math.floor(Math.random() * lettersOfPokemonName.length);

        for (let i = 0; i < exclude.length; i++) {
            if (ranNum === exclude[i]) {
                ranNum = await generateRandomWithExclusion(exclude, lettersOfPokemonName);
            }
        }

        return ranNum;
    }

    return (
        <Button 
            className="btn__hint"
            onClick={buyHint}
            buttonText={"Buy hint"}
        />
    );
}

export default Hint;
