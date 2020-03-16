// import { example } from './data.js';

import data from './data/pokemon/pokemon.js';
//console.log(example, data);

const typePokemon = (arrayType) => {
  let styleType = '';
  for (let i = 0; i < arrayType.length; i += 1) {
    styleType += `
        <span class="typeText pok_type_${arrayType[i]}">${arrayType[i]}</span> 
        `;
  }
  return styleType;
};

const dataPokemon = document.getElementById('pokemon_Data');

const allPokemon = () => {
  let info = '';
  data.pokemon.forEach((obj) => {
    info += `
        <div class = "pokemonInfo">
            <img src="${obj.img}">
            <p class = "pokemonnum">#${obj.num}</p>
            <h5>${obj.name[0].toUpperCase()}${obj.name.substring(1)}</h5>
            <p>${typePokemon(obj.type)}</p>
        </div>
        `;
  });
  return info;
};

dataPokemon.innerHTML = allPokemon();

// const btnMostrar = document.getElementById('btn_Mostrar');
// btnMostrar.addEventListener('click', () => {
// });
