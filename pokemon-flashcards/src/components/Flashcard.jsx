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
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211"
            alt="Pokémon Logo"
            className="pokemon-logo"
          />
            <img src={pokemon.image} alt={pokemon.name} className="flashcard-image"/>
            <h2>Guess me!!</h2>
            <p>Hint: {pokemon.type}</p>
            </div>
            <div className="flashcard-back">
            <h2>{pokemon.name}</h2>
          <p >Type: {pokemon.type}</p>
          <p>
            Fun Fact: {pokemon.funFact}
          </p>
          </div>
        </div>
        </div>
    );
}

export default Flashcard;