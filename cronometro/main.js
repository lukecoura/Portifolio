let relogio = document.querySelector('.watch');
let iniciarContagem = document.querySelector('.iniciar');
let pausarContagem = document.querySelector('.pausar');
let pararContagem = document.querySelector('.parar');

let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = 0;

iniciarContagem.addEventListener('click', function() {
    watch();
    intervalo = setInterval(watch, 1000);
});

pausarContagem.addEventListener('click', function() {
    clearInterval(intervalo);
});

pararContagem.addEventListener('click', function() {
    clearInterval(intervalo);
    horas = 0;
    minutos = 0;
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});

function doisDigitos(digito) {
    if (digito < 10) {
        return '0' + digito;
    } else {
        return digito;
    }
}

function watch() {
    segundos++;
    if (segundos == 60) {
        minutos++;
        segundos = 0;

        if (minutos == 60) {
            horas++;
            minutos = 0;
        }
    }

    relogio.innerHTML = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}
