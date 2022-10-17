const button = document.querySelector('.read_button');

button.addEventListener('click', function() {
    const card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        return button.innerHTML = 'Ler menos'
    }

    return button.innerHTML = 'Ler mais'
})