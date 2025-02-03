const mainDiv = document.getElementById("main");

async function getPokemons() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error(error.message);
    }
  }

async function renderPokemons() {
    const response = await getPokemons();
    const pokemons = response;
    pokemons.forEach((pokemon) => {
        const button = document.createElement("button");
        button.textContent = pokemon.name;
        button.className = "pokedex-button";
        button.addEventListener("click", () => {
            getPokemonDetails(pokemon.name);
        });
        mainDiv.appendChild(button);
    });
  }  

 document.addEventListener("DOMContentLoaded", renderPokemons);

 async function getPokemonDetails(pokemonName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    mainDiv.setAttribute("hidden", true);
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json.results;
      } catch (error) {
        console.error(error.message);
      }
    
 }
  