import React from 'react';
import Flashcard from './Flashcard';
import './FlashcardList.css';

const pokemons = [
  { name: 'Pikachu', type: 'Electric', image: 'https://img.pokemondb.net/artwork/large/pikachu.jpg' },
  { name: 'Charmander', type: 'Fire', image: 'https://img.pokemondb.net/artwork/large/charmander.jpg' },
  { name: 'Bulbasaur', type: 'Grass/Poison', image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg' },
  { name: 'Squirtle', type: 'Water', image: 'https://img.pokemondb.net/artwork/large/squirtle.jpg' },
  // Add more Pokémon as needed
];

const FlashcardList = () => {
  return (
    <div className="flashcard-list">
      {pokemons.map((pokemon, index) => (
        <Flashcard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default FlashcardList;