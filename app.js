const dataWrapper = document.querySelector('.dataWrapper');
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

let nextPage = 'https://pokeapi.co/api/v2/pokemon/'
let prevPage = null;

const handleGetPokemons = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    nextPage = data.next
    prevPage = data.previous
    const pokemonContent = document.querySelectorAll('p');
    pokemonContent.forEach((item) => {        
        item.remove();
    });

   data.results.forEach ((item) => {
        const pokemon = document.createElement('p');
        pokemon.textContent = item.name;
        dataWrapper.append(pokemon);
   });
};
handleGetPokemons(nextPage);

nextBtn.addEventListener('click', () => {
    handleGetPokemons(nextPage)
}) 
prevBtn.addEventListener('click', () => {
    handleGetPokemons(prevPage)
})