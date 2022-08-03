import React from "react";
import "../../../style.scss";
import "./Pokemon.scss";

const Pokemon = (props) => {
    const pokemonNameLength = () => {
        let anonymousName = "";
        for (let i = 0; i < props.name.length; i++) {
            props.name.length === (props.name.length - 1) ? anonymousName += "_" : anonymousName += "_ ";
        }
        return anonymousName;
    }

    const formatHint = () => {
        let hint = "";
        for (let i = 0; i < props.hint.length; i++) {
            props.name.length === (props.name.length - 1) ? hint += props.hint[i] + "" : hint += props.hint[i] + " ";
        }
        return hint;
    }

    return (
        <div id="cards">
            <figure className={`card card--${props.type}`}>
                <div className="card__image-container">
                    <img className="card__image"  src={props.imgUrl} alt={props.name} />
                </div>
                <figcaption className="card__caption">
                    <h1 className="card__name mt-2">{ props.hint.length === 0 ? pokemonNameLength() : formatHint() }</h1>
                    <h3 className="card__type">
                        {props.type}
                    </h3>
                    <table className="card__stats">
                        <tbody><tr>
                            <th>HP</th>
                            <td>{props.hp}</td>
                        </tr>
                            <tr>
                                <th>Attack</th>
                                <td>{props.attack}</td>
                            </tr>

                            <tr>
                                <th>Defense</th>
                                <td>{props.defense}</td>
                            </tr>

                            <tr>
                                <th>Special Attack</th>
                                <td>{props.specialAttack}</td>
                            </tr>
                            <tr>
                                <th>Special Defense</th>
                                <td>{props.specialDefense}</td>
                            </tr>
                            <tr>
                                <th>Speed</th>
                                <td>{props.speed}</td>
                            </tr>
                        </tbody></table>

                    <div className="card__abilities">
                        <h6 className="card__ability">
                            <span className="card__label">Ability</span>
                            {props.ability}
                        </h6>
                        <h6 className="card__ability">
                            <span className="card__label">Hidden Ability</span>
                            {props.hiddenAbility}
                        </h6>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default Pokemon;
