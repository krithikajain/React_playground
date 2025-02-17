import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardList.css';



const FlashcardList = () => {

  const pokemons = [
    { name: 'Pikachu', 
      type: 'Electric', 
      image: 'https://img.pokemondb.net/artwork/large/pikachu.jpg',
      funFact: "Pikachu was almost replaced by Clefairy as the mascot!",
    },
    { name: 'Charmander', 
      type: 'Fire', 
      image: 'https://img.pokemondb.net/artwork/large/charmander.jpg',
      funFact: "Charmander is the tallest of all Fire-type starter Pokémon!",},
    { name: 'Bulbasaur', 
      type: 'Grass/Poison', 
      image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
    funFact: "Bulbasaur is the only Pokémon to learn Leech Seed by leveling up!",},
    { name: 'Squirtle', 
      type: 'Water', 
      image: 'https://img.pokemondb.net/artwork/large/squirtle.jpg',
      funFact: "Squirtle shells are super strong right from birth.",
    },
    // Add more Pokémon as needed
  ];

  const[currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % pokemons.length);
  };
  return (
    <div>
      <Flashcard pokemon={pokemons[currentIndex]}/>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}


export default FlashcardList;