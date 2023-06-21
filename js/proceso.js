// Abrir el juego
var jugar = document.getElementById('jugar')
var juego = document.getElementById('juego')
var validarNombre = document.getElementById('validarNombre')
var saludo = document.getElementById('saludo')
jugar.addEventListener("click", function () {
    var nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        validarNombre.style.display = "block"
        validarNombre.textContent = "Por favor, ingresa un nombre."
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        validarNombre.style.display = "block"
        validarNombre.textContent = "Por favor, ingresa un nombre válido."
    } else {
        validarNombre.style.display = "block"
        validarNombre.textContent = "El nombre es válido."
        saludo.textContent = nombre
        juego.style.display = "block"

    }
})

// Juego
var numeroAleatorio = Math.floor(Math.random() * 20) + 1;
console.log(numeroAleatorio)
var contador = 0;
var miBoton = document.getElementById("Adivinar");

miBoton.addEventListener("click", function () {
    contador++;
})
contador = contador + 1
function adivina_numero() {
    let numero = document.getElementById('numero').value
    var uno = document.getElementById('1')
    var dos = document.getElementById('2')
    var tres = document.getElementById('3')
    var cuatro = document.getElementById('4')
    var cinco = document.getElementById('5')
    var seis = document.getElementById('6')
    var siete = document.getElementById('7')
    var ocho = document.getElementById('8')
    var nueve = document.getElementById('9')
    var dies = document.getElementById('10')
    var once = document.getElementById('11')
    var doce = document.getElementById('12')
    var trece = document.getElementById('13')
    var catorce = document.getElementById('14')
    var quince = document.getElementById('15')
    var dieciseis = document.getElementById('16')
    var dieciseite = document.getElementById('17')
    var dieciocho = document.getElementById('18')
    var diecinueve = document.getElementById('19')
    var Veinte = document.getElementById('20')
    var resultado = document.getElementById('resultado')
    var lista = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, dies, once, doce, trece, catorce, quince, dieciseis, dieciseite, dieciocho, diecinueve, Veinte]

    if (numero <= 1 || numero >= 20) {

        resultado.style.display = "block"
        resultado.textContent = "La numero no cumple con el rango requerido(1-20)... "
    }
    for (var i = 0; i < lista.length; i++) {
        console.log(lista[i].id);
        if (numero == lista[i].id) {
            lista[i].style.backgroundColor = 'red'
            if (numero > numeroAleatorio) {
                resultado.style.display = "block"
                resultado.textContent = 'Estás muy cerca, el número es menor a ' + numero
            }
            if (numero < numeroAleatorio) {
                resultado.style.display = "block"
                resultado.textContent = 'Estás muy cerca, el número es mayor a ' + numero
            }
            if (lista[i].id == numeroAleatorio) {
                lista[i].style.backgroundColor = 'green'
                resultado.style.display = "block"
                resultado.textContent = '¡Lo has logrado!, Intentos que necesitaste: ' + contador
            }
        }
    }

}