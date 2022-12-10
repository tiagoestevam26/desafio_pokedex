const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
const offset = 0;
const limit = 0;

/* function (tanana){}     ou      (tanana) => {} 
Se for só uma linha de return nem precisa do corpo!!!
O que vai pro then eh o retorno do then de antes.
*/

function convertePokemonsParaLi(pokemon){
    return `
                <li class="pokemon">
                        <span class="number">#001</span>
                        <span class="name">${pokemon.name}</span>
                        <div class="detail">
                            <ol class="types">
                                <li class="type">grass</li>
                                <li class="type">poison</li>
                            </ol>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                        </div>
                    </li>
            
    `
}

const pokemonList = document.getElementById('pokemonList')


PokeAPI.getPokemons().then(function (pokemons){

    const Lista = []
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i]
        Lista.push(pokemon)
    }
    console.log(Lista)
    //pokemonList.innerHTML += convertePokemonsParaLi(pokemon)
  })













