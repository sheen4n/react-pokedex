import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemons, total_exp, isWinner }) => {
  const winText = isWinner ? 'Winning' : 'Losing';

  return (
    <div className='Pokedex'>
      <h1>Pokdex!</h1>

      <p className={`Pokedex-${winText.toLowerCase()}`}>
        {winText.toUpperCase()} HAND
      </p>
      <h4>Total Experience : {total_exp}</h4>
      <div className='Pokedex-cards'>
        {pokemons.map(pokemon => (
          <Pokecard {...pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
