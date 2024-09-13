"use strict";
//Ejercicio 2
console.log("Ejercicio 2: corriendo desde typescript");
//Ejercicio 3
let texto = "Hola, TypeScript!";
let numero = 123;
let booleano = true;
let fecha = new Date("2024-09-09");
const divOne = document.getElementById("divId1");
if (divOne) {
    divOne.innerHTML = `
    <p>Texto: ${texto}</p>
    <p>Numero: ${numero}</p> 
    <p>Booleano: ${booleano}</p>
    <p>Fecha: ${fecha.toLocaleDateString()}</p>`;
}
//Ejercicio 4
function convertirString(num) {
    const numString = num.toString();
    return numString;
}
const divTwo = document.getElementById("divId2");
if (divTwo) {
    divTwo.innerHTML = `
    <p>Número convertido a cadena: ${convertirString(456)}</p>`;
}
//Ejercicio 5
function sumarElementos(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
let arrayNumeros = [3, 3, 3, 3, 3];
const divThree = document.getElementById("divId3");
if (divThree) {
    divThree.innerHTML = `
    <p>Suma del array: ${sumarElementos(arrayNumeros)}</p>`;
}
const estudiante1 = {
    nombre: "Juan",
    edad: 20,
    curso: "Matemáticas"
};
const divFour = document.getElementById("divId4");
if (divFour) {
    divFour.innerHTML = `
    <p>Estudiante: ${estudiante1.nombre}</p>
    <p>Edad: ${estudiante1.edad}</p>
    <p>Curso: ${estudiante1.curso}</p>`;
}
const miDireccion = {
    ciudad: "Ciudad",
    calle: "Av. Principal",
    cp: 12345
};
const divFive = document.getElementById("divId5");
if (divFive) {
    divFive.innerHTML = `
    <p>Dirección: Calle:${miDireccion.calle}, Ciudad:${miDireccion.ciudad}, CP:${miDireccion.cp} </p>`;
}
const user1 = {
    nombre: "Ana",
    correo: "ana@gmail.com",
    saludar: function () {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};
const divSix = document.getElementById("divId6");
if (divSix) {
    divSix.innerHTML = `
    <p>${user1.saludar()}</p>`;
}
//Ejercicio 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
}
const persona1 = new Persona("Carlos", 30);
const divSeven = document.getElementById("divId7");
if (divSeven) {
    divSeven.innerHTML = `
    <p>${persona1.presentarse()}</p>`;
}
//Ejercicio 10
class Caja {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
const cajaTexto = new Caja("Mensaje secreto");
const cajaNumero = new Caja(42);
const divEight = document.getElementById("divId8");
if (divEight) {
    divEight.innerHTML = `
    <p>Contenido de cajaDeTexto:${cajaTexto.getValue()}</p>
    <p>Contenido de cajaDeNumero:${cajaNumero.getValue()}</p>`;
}
//Ejercicio 11
function identidad(valor) {
    return valor;
}
const divNine = document.getElementById("divId9");
if (divNine) {
    divNine.innerHTML = `
    <p>Identidad del número: ${identidad(123)}</p>
    <p>Identidad del texto: ${identidad("texto")}</p>`;
}
//Ejercicio 12
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
const colorFav = Color.Azul;
const divTen = document.getElementById("divId10");
if (divTen) {
    divTen.innerHTML = `
    <p>Color favorito: ${colorFav}</p>`;
}
