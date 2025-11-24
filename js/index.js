const horas = document.getElementById('hr')
const minutos = document.getElementById('min')
const segundos = document.getElementById('seg')
const info = document.querySelector('h1')

const relogio = setInterval(function time() {
let dateToday = new Date();
let hr = dateToday.getHours();
let min = dateToday.getMinutes();
let s = dateToday.getSeconds();

if (hr < 10) hr = '0' + hr;
if (min < 10) min = '0' + min;
if (s < 10) s = '0' + s;

horas.textContent = hr;
minutos.textContent = min;
segundos.textContent = s;

if (hr >= 6 && hr < 12){
    info.innerHTML = `Bom dia!`
}else if (hr >= 12 && hr < 18){
    info.innerHTML = `Boa tarde!`
}else{
    info.innerHTML = `Boa noite!`
}

}) 