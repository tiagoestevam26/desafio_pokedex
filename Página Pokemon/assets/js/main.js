const pokemonHtml = document.getElementById("pokemonHtml");
const pokemonCode = 1;

function convertePokemonParaHTML(pokemon) {
  return `
    <div class = "tudo ${pokemon.type}"<>
    <div class="topoPaginaTotal ">
        <div class = "topoPagina1"> 
            <h1 class= "nomePokemon">${pokemon.name}</h1>
            <ol class="listTypes">
                ${pokemon.types
                  .map(
                    (type) => `<li class="type ${pokemon.type}">${type}</li>`
                  )
                  .join("")} 
            </ol>
        </div>
        <h1 class="numberPokemon" >#${pokemon.number}</h1>
    </div>
    <div class="teste">
    <img class="imagemPokemon" src="${pokemon.photo}" alt="${pokemon.name}">
    <div class="painelPagina">
        <div class="partePainel">
            <h2 class="tituloPainel">About</h2>
        <div class = "infototalPainel">
           <div class = "infoPainel">
                <span class="tituloDado">Height</span>
                <span class="tituloDado">Weight</span>
                <span class="tituloDado">Abilities</span>
           </div>
           <div class = "infoPainel">
                <span class="dado">${pokemon.height}0 cm</span>
                <span class="dado">${pokemon.weight / 10} kg</span>
                ${pokemon.abilities
                  .map((type) => `<span class="dado">${type}</span>`)
                  .join("")}
           </div>
        </div>
        </div>
        <div class="partePainel">
            <h2 class="tituloPainel">Breeding</h2>
        <div class = "infototalPainel">
           <div class = "infoPainel">
                <span class="tituloDado">Gender</span>
                <span class="tituloDado">Egg Groups</span>
           </div>
           <div class = "infoPainel">
                <div class="generos">
                    <div class= divGenero>
                    <img class="imgGenero" src="https://cdn-icons-png.flaticon.com/512/4080/4080331.png" alt="masculino">
                        <span class="genero">?%</span>
                    </div>
                    <div class= divGenero>
                        <img class="imgGenero" src="https://cdn-icons-png.flaticon.com/512/949/949854.png" alt="feminino">
                        <span class="genero">?%</span>
                    </div>
                </div>
                <span class="dado">?</span>
           </div>
        </div>
    </div>
</div>
</div>
`;
}

//convertePokemonParaHTML(pokeAPI.action(pokemonCode))

function confereCor(type) {
  if (type === "normal") {
    return "#A8A77A";
  } else if (type === "fire") {
    return "#EE8130";
  } else if (type === "water") {
    return "#6390F0";
  } else if (type === "electric") {
    return "#F7D02C";
  } else if (type === "grass") {
    return "#7AC74C";
  } else if (type === "ice") {
    return "#96D9D6";
  } else if (type === "fighting") {
    return "#C22E28";
  } else if (type === "poison") {
    return "#A33EA1";
  } else if (type === "ground") {
    return "#E2BF65";
  } else if (type === "flying") {
    return "#A98FF3";
  } else if (type === "psychic") {
    return "#F95587";
  } else if (type === "bug") {
    return "#A6B91A";
  } else if (type === "rock") {
    return "#B6A136";
  } else if (type === "ghost") {
    return "#735797";
  } else if (type === "dragon") {
    return "#6F35FC";
  } else if (type === "dark") {
    return "#705746";
  } else if (type === "steel") {
    return "#B7B7CE";
  } else if (type === "fairy") {
    return "#D685AD";
  }
}

pokeAPI.getDetails(pokemonCode).then(function (pokemon) {
  console.log(pokemon);
  pokemonHtml.innerHTML = convertePokemonParaHTML(pokemon);
  pokemonHtml.style.background = confereCor(pokemon.type);
});
