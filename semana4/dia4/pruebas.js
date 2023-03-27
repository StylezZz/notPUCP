//Variable
let nombre = "Juan";

//Arreglos
let productos = ["guillermo", "juan", "pedro", 1000, true];

//Imprimir
console.log(nombre)
console.log(productos)
console.log("La cantidad de productos es: ", productos.length)

//Constantes
const pi = 3.141516;

//Funciones
function suma(a, b) {
  return a + b;
}

//Funciones con alert
function mandarSaludo(){
    console.log("Hola Mundo");
    alert("Hola Mundo");
}


//Funciones flecha
const saludar = (nombre,apellido)=>{
  return `hola mi nombre es ${nombre} y mi apellido es ${apellido}`;
}

console.log(saludar("Christian","Carrillo"));

let mostrarNombre = ()=>{
  let elementoNombre = document.getElementById('usuario');
  let titulo = document.getElementById('titulo');
  let mensaje = `Hola ${elementoNombre.value}`;

  titulo.textContent = mensaje;
}

//Captura el mensaje del input de texto
//Y lo muestra con el h1 titulo nuevo
//innerHTML: Permite mostrar el texto en el html
let mostrarTexto=()=>{
  let elementoNombre = document.getElementById('inputTexto');
  let mensaje = document.getElementById('titulo');

  mensaje.textContent = elementoNombre.value;
}

//---------------------------------------

const comenzarAlarma = ()=>{
  setTimeout(tiempoCompleto,5000);
}

const tiempoCompleto = ()=>{
  alert("Se acabo el tiempo");
}


const comenzarTiempo = ()=>{
  let tiempo = document.getElementById('tiempoElegido');
  let tiempoSegundos = tiempo.value;
  let tiempoMilisegundos = tiempoSegundos * 1000;
  setTimeout(cambiar,tiempoMilisegundos);
}

const cambiar = ()=>{
  let titulo = document.getElementById('textoAlarma');
  titulo.textContent = "PRENDIDO";
  titulo.style.color = "green";
}
