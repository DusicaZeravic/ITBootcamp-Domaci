let pokemonOne = {
    name: 'Pikachu',
    sort: 'electric',
    abilities: ['static', 'lightning rod'],
    characteristics: { attack: 55, defense: 40, speed: 90 }
}

let pokemonTwo = {
    name: 'Bulbasaur',
    sort: 'poison',
    abilities: ['overgrow', 'chlorophyill'],
    characteristics: { attack: 90, defense: 65, speed: 50 }
}

let pokemonThree = {
    name: 'Charmander',
    sort: 'fire',
    abilities: ['blaze', 'solar power'],
    characteristics: { attack: 52, defense: 43, speed: 65 }
}

let pokemonFour = {
    name: 'Pichu',
    sort: 'electric',
    abilities: ['static', 'lightning rod'],
    characteristics: { attack: 40, defense: 15, speed: 60 }
}

let pokemonFive = {
    name: 'Raichy',
    sort: 'electric',
    abilities: ['static', 'lightning rod'],
    characteristics: { attack: 90, defense: 55, speed: 110 }
}

let pokemonSix = {
    name: 'Aerodactyl',
    sort: 'flying',
    abilities: ['rock head', 'pressure', 'unnerve'],
    characteristics: { attack: 105, defense: 65, speed: 130 }
}

let pokemonList = [pokemonOne, pokemonTwo, pokemonThree, pokemonFour, pokemonFive, pokemonSix];

// Funkcija koja prima niz pokemona i vraca niz sposobnosti svih pokemona
const abilitiesList = (pokemonList) => {
    return pokemonList.map(pokemon => pokemon.abilities).flat();
}
console.log(abilitiesList(pokemonList));

// Sortiranje pokemona po brzini - rastuce
const sortPokemonBySpeed = pokemonList.sort((a, b) => a.characteristics.speed - b.characteristics.speed);
console.log(sortPokemonBySpeed);
