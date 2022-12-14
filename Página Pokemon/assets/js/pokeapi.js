const pokeAPI = {};
//const pokemonfinal = new pokemonInteiro();

function converteParaModelo1(pokeDetail) {
  const pokemonfinal = new pokemonInteiro();
  pokemonfinal.name = pokeDetail.name;
  pokemonfinal.number = pokeDetail.id;
  pokemonfinal.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  pokemonfinal.type = pokemonfinal.types[0];
  pokemonfinal.photo = pokeDetail.sprites.other.dream_world.front_default;
  pokemonfinal.height = pokeDetail.height;
  pokemonfinal.weight = pokeDetail.weight;
  pokemonfinal.abilities = pokeDetail.abilities.map(
    (typeSlot) => typeSlot.ability.name
  );
  return pokemonfinal;
}

/*function  converteparaModelo2(pokeDetail){
    pokemonfinal.gender = pokeDetail.gender_rate
    pokemonfinal.egggroups = pokeDetail.egg_groups.map((typeSlot)=> typeSlot.name)
}   */

/*pokeAPI.pegaRestoDetails = function (pokeDetail){
    return  fetch(pokeDetail)
            .then((response) => response.json())
}*/

pokeAPI.getDetails = function (pokemonCode) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonCode}`;
  return fetch(url)
    .then((response) => response.json())
    .then((resposta) => converteParaModelo1(resposta))
    .catch((error) => console.error(error));
  /*fetch(url)
            .then((response) => response.json())
            .then((bodyJson) => bodyJson.species.url)
            .then((resposta)=>pokeAPI.pegaRestoDetails(resposta))
            .then((newDetails)=> converteparaModelo2(newDetails))
            .catch((error) => console.error(error))
*/
};
