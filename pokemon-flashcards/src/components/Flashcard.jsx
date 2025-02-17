import React , { useState }from "react";
import './Flashcard.css';

const Flashcard = ({pokemon}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flashcard ${isFlipped?'flipped':''}`} onClick={handleFlip}>
        <div className="flashcard-inner">
            <div className="flashcard-front">
            <img src={pokemon.image} alt={pokemon.name} className="flashcard-image"/>
            <h2>What's that pokemon</h2>
            <p>Hint: {pokemon.type}</p>
            </div>
            <div className="flashcard-back">
            <h2>{pokemon.name}</h2>
          <p >Type: {pokemon.type}</p>
          <p >
            Fun Fact: {pokemon.funFact}
          </p>
          </div>
        </div>
        </div>
    );
}

export default Flashcard;