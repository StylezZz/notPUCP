const valor1 = prompt("ingrese valor 1");
const valor2 = prompt("ingrese valor 2");

const operacion = prompt("ingrese una operacion puede ser +,´-,*,/")
let resultadoCalculadora = 0;

//ParseInt = convierte el string en number 
//la forma moderna de anteponiendo el signo +valor1
//toString = conviwerte un number en string 
//ParsefLoat =  decimales .. 

if(operacion === "+"){
    resultadoCalculadora = +valor1 + +valor2;
    console.log("resultado", resultadoCalculadora)
}else if(operacion === "-"){
    resultadoCalculadora = valor1 - valor2;
    console.log("resultado", resultadoCalculadora)
}else if(operacion === "*"){
    resultadoCalculadora = valor1 * valor2;
    console.log("resultado", resultadoCalculadora)
}else if(operacion === "/"){
    resultadoCalculadora = valor1 / valor2;
    console.log("resultado", resultadoCalculadora)
}else{
    alert("operacion no valida")
}


//Detectar si un numero es par o impar
let numero = prompt("ingrese un numero");
if(numero % 2 === 0){
    console.log("el numero es par")
}else{
    console.log("el numero es impar")
}

//Pedir dos numeros y decir cual es el mayor
let numero1 = prompt("ingrese un numero");
let numero2 = prompt("ingrese un numero");

if(numero1 > numero2){
    console.log("el numero mayor es", numero1)
}else if(numero1 < numero2){
    console.log("el numero mayor es", numero2)
}else{
    console.log("los numeros son iguales")
}