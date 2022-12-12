/* function (tanana){}     ou      (tanana) => {} 
Se for só uma linha de return nem precisa do corpo!!!
O que vai pro then eh o retorno do then de antes.
*/

function converteTypesparaLi(types){
    return types.map((typeSlot)=>`<li class="type">${typeSlot.type.name}</li>`)
}

function convertePokemonsParaLi(pokemon){
    return `
                <li class="pokemon">
                        <span class="number">${pokemon.order}</span>
                        <span class="name">${pokemon.name}</span>
                        <div class="detail">
                            <ol class="types">
                                ${converteTypesparaLi(pokemon.types).join('')} 
                            </ol>
                            <img src=${pokemon.sprites.other.dream_world.front_default} 
                            alt="${pokemon.name}">
                        </div>
                    </li>
            
    `
}

const pokemonList = document.getElementById('pokemonList')


PokeAPI.getPokemons().then(function (pokemons = []){

    console.log(pokemons)
    pokemonList.innerHTML = pokemons.map(convertePokemonsParaLi).join('')
    

    /*  VERSOES DIFERENTES DO MESMO CODIGO
    
    const newList = pokemons.map((pokemon)=> {
        return convertePokemonsParaLi(pokemon)
    })
    console.log(newList)
    const newListHtml = newList.join('') 
    pokemonList.innerHTML += newListHtml


    const Lista = []
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i]
        Lista.push(pokemon)
    }
    console.log(Lista)
    
    */
  })













