// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

export const allPokemon = (dataPokemons) => {
    let infoPoke = '';
    dataPokemons.forEach((obj) => {
      infoPoke += `
          <div class = "pokemonInfo">
              <img src="${obj.img}">
              <p class = "pokemonnum">#${obj.num}</p>
              <h5>${obj.name[0].toUpperCase()}${obj.name.substring(1)}</h5>
              <p>${typePokemon(obj.type)}</p>
          </div>
          `;
    });
    return infoPoke;
};

export const orderData = (data, property, condition) => {
    let newDataOrder ;
    if (condition === 'a-z') {
        newDataOrder = data.sort((a,b) => {
            if (a[property] > b[property]) {
                return 1;
              } if (a[property] < b[property]) {
                return -1;
              }
              return 0;
        });
    } else {
        newDataOrder = data.sort((a, b) => {
            if (a[property] < b[property]) {
              return 1;
            } if (a[property] > b[property]) {
              return -1;
            }
            return 0;
          });
    }
  return newDataOrder;
};
