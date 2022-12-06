const imagePokemon = document.querySelector('[data-image]');
const numberPokemon = document.querySelector('[data-number]');
const namePokemon = document.querySelector('[data-name]');
const form = document.querySelector('[data-form]');
const inputSelector = document.querySelector('[data-input]');
const prevButton = document.querySelector('[data-prev]');
const nextButton = document.querySelector('[data-next]');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();

    return data;
}

const renderPokemon = async (pokemon) => {
    namePokemon.innerHTML = 'loading...';

    try {
        imagePokemon.style.display = 'block';
        const data = await fetchPokemon(pokemon);
        numberPokemon.innerHTML = `${data.id} -`;
        namePokemon.innerHTML = data.name;
        imagePokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        searchPokemon = data.id;
    } catch {
        numberPokemon.innerHTML = '';
        namePokemon.innerHTML = 'not found :c';
        imagePokemon.style.display = 'none';
    }
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    renderPokemon(inputSelector.value.toLowerCase());
    inputSelector.value = '';
});

prevButton.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon--;
        renderPokemon(searchPokemon);
    }
});

nextButton.addEventListener('click', () => {
    if (searchPokemon < 649) {
        searchPokemon++;
        renderPokemon(searchPokemon);
    }
});

renderPokemon(searchPokemon);
