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

const btnMostrar = document.getElementById('btn_Mostrar');
const array_pokemon = data;

btnMostrar.addEventListener('click', () => {
    let pokemonData = document.getElementById('pokemon_Data');
    //pokemonData.innerHTML = 'pokemones'+ data.addEventListener;
    //console.log(data);
    //pokemonData.innerHTML = data.pokemon[1].name;
    for (let i = 0; i < array_pokemon.pokemon.length; i++) {
        console.log(array_pokemon.pokemon[i].num, array_pokemon.pokemon[i].name);
        //pokemonData.innerHTML = array_pokemon.pokemon[i].num;
    }
    
    
    
})

