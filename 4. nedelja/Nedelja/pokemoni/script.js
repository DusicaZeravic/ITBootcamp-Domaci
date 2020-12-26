let pokemonOne = {
    name: 'Pikachu',
    sort: 'electric',
    abilities: ['static', 'lightning rod'],
    characteristics: { attack: 55, defense: 40, speed: 90 },
    description: '<strong>Pikachu</strong> is a electric-type species of Pokémon, fictional creatures that appear in an assortment of video games, television shows, movies, trading card games, and comic books licensed by The Pokémon Company. It is a yellow mouse-like creature with powerful electrical abilities.',
    image: './images/pikachu.jpg'
}

let pokemonTwo = {
    name: 'Bulbasaur',
    sort: 'poison',
    abilities: ['overgrow', 'chlorophyill'],
    characteristics: { attack: 90, defense: 65, speed: 50 },
    description: 'Known as the Seed Pokémon, <strong>Bulbasaur</strong> can survive for days solely on sunlight. It is a central character in the anime, being one of Ashs main Pokémon for the first season, and a different one later being obtained by May.',
    image: './images/bulbasaur.webp'
}

let pokemonThree = {
    name: 'Charmander',
    sort: 'fire',
    abilities: ['blaze', 'solar power'],
    characteristics: { attack: 52, defense: 43, speed: 65 },
    description: '<strong>Charmander</strong> is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw.',
    image: './images/charmander.png'
}

let pokemonFour = {
    name: 'Pichu',
    sort: 'electric',
    abilities: ['static', 'lightning rod'],
    characteristics: { attack: 40, defense: 15, speed: 60 },
    description: '<strong>Pichu</strong> is a small, ground-dwelling rodent Pokémon with pale yellow fur. Its ear-tips, collar, and tail are black and angular. Pichus pink cheek pouches can store small amounts of electricity, and its tiny nose looks like a dot. Pichu is classified as a quadruped, but it can walk easily on its hind legs.',
    image: './images/pichu.png'
}

let pokemonFive = {
    name: 'Raichy',
    sort: 'electric',
    abilities: ['static', 'lightning rod'],
    characteristics: { attack: 90, defense: 55, speed: 110 },
    description: '<strong>Raichy</strong> is a bipedal, rodent-like Pokémon. Raichu is covered in dark orange fur with a white belly. Its bifurcated ears are brown on the outside, yellow on the insides, and end in a distinctive curl. There is a circular yellow marking on each cheek where its electric sacs are, and it has a triangular, dark brown nose. Its arms and feet have patches of brown fur at the end, and the soles of its long feet are tan with a circular orange pad in the center.',
    image: './images/raichu.png'
}

let pokemonSix = {
    name: 'Aerodactyl',
    sort: 'flying',
    abilities: ['rock head', 'pressure', 'unnerve'],
    characteristics: { attack: 105, defense: 65, speed: 130 },
    description: '<strong>Aerodactyl</strong> is a reptilian, bipedal Pokémon with large, membranous wings. It has small, sharply pointed ears, narrow eyes, a ridged snout with a gaping mouth, and a strong lower jaw full of serrated fangs. Its body is covered in light purplish gray skin with violet wing membranes.',
    image: './images/aerodactyl.jpg'
}

let pokemonList = [pokemonOne, pokemonTwo, pokemonThree, pokemonFour, pokemonFive, pokemonSix];
console.log(pokemonList);


// Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.
function returnStrongest(pokemonList) {
    return pokemonList.sort((a, b) => b.characteristics.attack - a.characteristics.attack).slice(0, 1);
}
console.log(returnStrongest(pokemonList));

// Prikaz svih pokemona
// Select elements
const btnShowAll = document.querySelector('#showAll');
const btnShowStrongest = document.querySelector('#showStrongest');
const mainDiv = document.querySelector('.wrapper');

// Show all 
btnShowAll.addEventListener('click', () => {
    pokemonList.forEach(pokemon => {
        mainDiv.innerHTML += `<div>
            <p>${pokemon.description}</p>
            <img src="${pokemon.image}" width="300px">
        </div>`
    })
})

// Show stongest pokemon
btnShowStrongest.addEventListener('click', () => {
    let strongestPokemon = returnStrongest(pokemonList);
        mainDiv.innerHTML += `<div>
            <p>${strongestPokemon[0].description}</p>
            <img src="${strongestPokemon[0].image}" width="300px">
        </div>`
});
