
const buttonGetPokemon = document.getElementById('get-pokemon');
const selectPokemons = document.getElementById('pokemon-select'); 
const divPokemon = document.getElementById('infoPokemon');

// console.log(selectPokemons);

// nombre: name
// imagen: sprites
// tipo: types
// altura: height
// peso:weight

buttonGetPokemon.addEventListener('click', () => {
    const pokemonName = selectPokemons.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then ((response) => {
            if (!response.ok) {
                throw new Error ('La solicitud no ha podido realizarse');
            }
            return response.json();
        })
        .then ((data) => {

            // Extraer la información necesaria
            const nombre = data.name;
            const imagen = data.sprites.front_default;
            const tipo = data.types;
            const altura = data.height;
            const peso = data.weight;

            // Mostrar la información en el divPokemon
            divPokemon.innerHTML = 
                `<p>Nombre: ${nombre}</p>
                <img src="${imagen}" alt="${nombre}">
                <p>Tipo: ${tipo}</p>
                <p>Altura: ${altura} dm</p>
                <p>Peso: ${peso} hg</p>`;

            // FAILED TRY 
            // if (selectPokemons.value ==='bulbasaur') {
        
            //     divPokemon.innerHTML = data.results[0]
            
            // };
            //     if (selectPokemons.value === 'charmander') {
            //     divPokemon.innerHTML = data.results[3]
            
            // } else {
            //     divPokemon.innerHTML = data.results[6]
            // }; 
    });
});


// DISCARD THIS 
// return pokSelection = selectPokemons;

// const pokSelection = selectPokemons;
  //     // const newElement = document.createElement('div');
                 
            //     divPokemon.createElement = 
            // }
            // // function findPokemonSelect(pokemon) => {
            // //     if (data.results) === 'bulbassaur' 