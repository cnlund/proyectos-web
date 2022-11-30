const circulo = document.getElementsByClassName('circulo')
const encender = document.getElementById('encendido')
const apagar = document.getElementById('apagado')
const regresar = document.getElementById("retornar")
var len = circulo.length;

const on = function() {
  for (var i = 0; i < len; i++) {
    circulo[i].removeAttribute("style");
    circulo[i].style.animationPlayState = "running";
    circulo[i].style.WebkitAnimationPlayState = "running";
  }
}

const off = function() {
  for (var i = 0; i < len; i++) {
    circulo[i].style.animation = "none";
    circulo[i].style.background = "#563260";
  }
}
const regreso = function(){
  location=("../index.html")
}

encender.addEventListener('click', on);
apagar.addEventListener('click', off);
regresar.addEventListener("click", regreso)