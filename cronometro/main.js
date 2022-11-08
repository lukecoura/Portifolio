let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = 0;

function start() {
    watch()
    intervalo = setInterval(watch, 1000);
}

function pause() {
    clearInterval(intervalo);
}

function parar() {
    clearInterval(intervalo);
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.querySelector('.watch').innerText = `00:00:00`;
}

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
