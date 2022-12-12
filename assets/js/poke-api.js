

const PokeAPI = {}

PokeAPI.getPokemonDetail = function(pokemon){
    return fetch(pokemon.url)
    .then((detalhesPokemon)=> detalhesPokemon.json())
}


PokeAPI.getPokemons = function(){
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
    const offset = 0;
    const limit = 0;
    return fetch(url)
     .then((response) => response.json())
     .then((jsonBody) => jsonBody.results)
     .then((pokemons)=> pokemons.map(PokeAPI.getPokemonDetail))
     .then((detalhesBody)=>Promise.all(detalhesBody))
     .catch((error) => console.error(error))
}