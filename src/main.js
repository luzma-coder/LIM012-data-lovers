import { example } from './data.js';
// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/worldbank/worldbank.js';

//console.log(example, data);
//console.log(data);

const data_pokemon = document.getElementById('pokemon_Data');

const allPokemon = (data) =>{
    let info = '';
    data.pokemon.forEach((obj) => {
        info += `
        <div class = "pokemonInfo">
            <img src="${obj.img}">
            <p>${obj.num}</p>
            <p>${obj.name}</p>
            <p>${obj.type}</p>
        </div>
        `;
    });
    return info;
};

data_pokemon.innerHTML = allPokemon(data);

const btnMostrar = document.getElementById('btn_Mostrar');
btnMostrar.addEventListener('click', () => {
    
    
})

