/* function (tanana){}     ou      (tanana) => {} 
Se for só uma linha de return nem precisa do corpo!!!
O que vai pro then eh o retorno do then de antes.
*/

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('botaoLoadMore')
const offset = 0
let limit = 10

function convertePokemonsParaLi(pokemon){  
    return `
                <li class="pokemon ${pokemon.type}">
                        <span class="number">${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')} 
                            </ol>
                            <img src=${pokemon.photo} 
                            alt="${pokemon.name}">
                        </div>
                    </li>
            
    `
}

carregaPokemons(offset,limit)

function carregaPokemons(offset, limit){
    PokeAPI.getPokemons(offset, limit).then(function (pokemons = []){
        console.log(pokemons)
        pokemonList.innerHTML = pokemons.map(convertePokemonsParaLi).join('')})
}

loadMoreButton.addEventListener('click', ()=>{
    if(limit<150){
    carregaPokemons(offset, limit)
    limit += 10
    }else{
    limit += 1
    carregaPokemons(offset, limit)
    loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
})


    

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
 













