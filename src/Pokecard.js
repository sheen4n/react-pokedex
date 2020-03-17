import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const zeroPad = (num, places) => String(num).padStart(places, '0');

const Pokecard = ({ id, name, type, base_experience }) => {
  const imgSrc = `${POKE_API}${zeroPad(id, 3)}.png`;

  return (
    <div className='Pokecard'>
      <h1 className='Pokecard-title'>{name}</h1>
      <div className='Pokecard-img'>
        <img src={imgSrc} alt={name} />
      </div>
      <div className='Pokecard-data'>{type}</div>
      <div className='Pokecard-data'>{base_experience}</div>
    </div>
  );
};

export default Pokecard;
