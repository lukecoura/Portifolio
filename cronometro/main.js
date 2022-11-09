let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = 0;
let iniciarContagem = document.querySelector('.iniciar')
let pausarContagem = document.querySelector('.pausar')
let pararContagem = document.querySelector('.parar')

iniciarContagem.addEventListener('click', function() {
    watch()
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
    document.querySelector('.watch').innerText = `00:00:00`;
});

function doisDigitos(digito) {
    if (digito < 10) {
        return ('0' + digito)
    } else {
        return (digito)
    }
}

function watch() {
    segundos++
    if (segundos == 60) {
        minutos++
        segundos = 0;
        if (minutos == 60) {
            minutos = 0;
            horas++
        }
    }
    document.querySelector('.watch').innerText = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}
