import React, { useEffect, useState } from "react";
import Pokemon from "../../guesser/components/pokemon/Pokemon";
import Score from "../../guesser/components/score/Score";
import Balance from "../../guesser/components/balance/Balance";
import Hint from "../../guesser/components/hint/Hint";
import Feedback from "../../guesser/components/feedback/Feedback";
import Guess from "../../guesser/components/guess/Guess";

const GuesserOverview = () => {
    const [pokemon, setPokemon] = useState({
        name: "",
        imgUrl: "",
        type: "",
        hp: "",
        attack: "",
        defense: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
        ability: "",
        hiddenAbility: ""
    });
    const [guess, setGuess] = useState("");
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState({
        correct: "",
        wrong: "",
        noBalance: ""
    });
    const [balance, setBalance] = useState(30);
    const [hint, setHint] = useState("");
    const [hintHistory, setHintHistory] = useState([]);

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

        const fetchData = async () => {
            try {
                const response = await fetch(BASE_API_URL + randomNumber);
                const json = await response.json();

                const formatAbility = (ability) => {
                    return ability.charAt(0).toUpperCase() + ability.slice(1);
                }

                setPokemon({
                    name: json.name,
                    imgUrl: json.sprites.front_default,
                    type: json.types[0].type.name,
                    hp: json.stats[0].base_stat,
                    attack: json.stats[1].base_stat,
                    defense: json.stats[2].base_stat,
                    specialAttack: json.stats[3].base_stat,
                    specialDefense: json.stats[4].base_stat,
                    speed: json.stats[5].base_stat,
                    ability: formatAbility(json.abilities[0].ability.name),
                    hiddenAbility: formatAbility(json.abilities[1].ability.name),
                });

                setGuess("");
                setHint("");
                setHintHistory([]);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [score]);

    const checkGuess = () => {
        const pokemonName = pokemon.name.toLowerCase();
        const userGuess = guess.toLowerCase();

        if (userGuess === pokemonName) {
            setFeedback({
                correct: "Your answer was correct!",
                wrong: "",
                noBalance: ""
            });

            setScore((prevScore) => prevScore += 1);

            setBalance((prevBalance) => prevBalance += 20);
        } else {
            setFeedback({
                correct: "",
                wrong: "Try again!",
                noBalance: ""
            });
        }
    }

    return (
        <>
            <Balance
                balance={balance}
            />
            <Hint
                balance={balance}
                setBalance={setBalance}
                setFeedback={setFeedback}
                name={pokemon.name}
                hint={hint}
                setHint={setHint}
                hintHistory={hintHistory}
                setHintHistory={setHintHistory}
            />
            <Score
                score={score}
            />
            <Pokemon
                name={pokemon.name}
                hint={hint}
                imgUrl={pokemon.imgUrl}
                type={pokemon.type}
                hp={pokemon.hp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                specialAttack={pokemon.specialAttack}
                specialDefense={pokemon.specialDefense}
                speed={pokemon.speed}
                ability={pokemon.ability}
                hiddenAbility={pokemon.hiddenAbility}
            />
            <Feedback
                setFeedback={setFeedback}
                correctFeedback={feedback.correct}
                wrongFeedback={feedback.wrong}
                noBalanceFeedback={feedback.noBalance}
                setScore={setScore}
            />
            <Guess
                guess={guess}
                setGuess={setGuess}
                checkGuess={checkGuess}
                setFeedback={setFeedback}
            />
        </>
    );
}

export default GuesserOverview;