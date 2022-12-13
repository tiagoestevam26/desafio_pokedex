

const PokeAPI = {}


function converteParaModeloMelhor (pokeDetail){
    const pokemon = new pokemonn()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id
    pokemon.types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    pokemon.type = pokemon.types[0]
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

PokeAPI.getPokemonDetail = function(pokemon){
    return fetch(pokemon.url)
    .then((detalhesPokemon)=> detalhesPokemon.json())
    .then(converteParaModeloMelhor)
}


PokeAPI.getPokemons = function(offset, limit){
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
     .then((response) => response.json())
     .then((jsonBody) => jsonBody.results)
     .then((pokemons)=> pokemons.map(PokeAPI.getPokemonDetail))
     .then((detalhesBody)=>Promise.all(detalhesBody))
     .catch((error) => console.error(error))
}