

const PokeAPI = {}


PokeAPI.getPokemons = function(){
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
    const offset = 0;
    const limit = 0;
    return fetch(url)
     .then((response) => response.json())
     .then((jsonBody) => jsonBody.results)
     .catch((error) => console.error(error))
}