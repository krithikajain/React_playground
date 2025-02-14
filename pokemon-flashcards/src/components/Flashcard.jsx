import React from "react";
import './Flashcard.css';

const Flashcard = ({pokemon}) => {
    return (
        <div className="flashcard">
            <img src={pokemon.image} alt={pokemon.name} className="flashcard-image"/>
            <h2>{pokemon.name}</h2>
            <p>Type: {pokemon.type}</p>
        </div>
    );
}

export default Flashcard;