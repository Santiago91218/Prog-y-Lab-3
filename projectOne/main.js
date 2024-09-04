// Punto 1 Ejercicio 2
/*let a= 5;
let b= 10;
let c= a+b;

console.log("El resultado de la suma entre a("+a+") y b("+b+") es: "+c)

//Punto 1 Ejercicio 3
let nombre = prompt("¿Cual es tu nombre?");
console.log("Hola, "+nombre+"!");*/




//Punto 2 Ejercicio 1
/*let a= 11;
let b= 15;
let c= 7;

if (a === b && b === c) {
    console.log("a, b y c son iguales");
} else if (a >= b && a >= c) {
    console.log("El numero mas grande es: " + a + "(a)");
} else if (b >= a && b >= c) {
    console.log("El numero mas grande es: " + b + "(b)");
} else {
    console.log("El numero mas grande es: " + c + "(c)");
}

//Punto 2 Ejercicio 2
let numeroIngresado = prompt("Ingresa un numero y te dire si es par o impar")

if(numeroIngresado%2 === 0){
    console.log("El numero "+numeroIngresado+", es par")
}else{
    console.log("El numero "+numeroIngresado +", es impar")
}*/




//Punto 3 Ejercicio 1
/*let var1=10

while(var1>=1){
    console.log(var1)
    var1=var1-1
}

//Punto 3 Ejercicio 2
let numIngresado = 0
do{
    numIngresado = prompt("Ingresa un numero mayor a 100")

}while(numIngresado<=100)

console.log("Ingresaste un numero mayor a 100: "+numIngresado)*/




//Punto 4 Ejercicio 1
/*const esPar = (num)=>{
    if(num%2 === 0){
        return "El numero "+num+" es par: "+true
    }else{
        return "El numero "+num+" es par: "+false
    }
}

console.log(esPar(8))
console.log(esPar(7))

//Punto 4 Ejercicio 2
const convertirCelsiusAFahrenheit = (varGrados)=>{
    let varFahreneheit = varGrados*1.8+32
    return varGrados+"°C son equivalenes a "+varFahreneheit+"°F"
}

console.log(convertirCelsiusAFahrenheit(30))*/




//Punto 5 Ejercicio 1
/*let persona={
    nombre:"Santiago",
    edad:19,
    ciudad:"Mendoza",
    cambiarCiudad: function(nuevaCiudad){
        this.ciudad = nuevaCiudad
    }
}

persona.cambiarCiudad("Barcelona")
console.log("Persona: "+persona.nombre+", Edad: "+persona.edad+", Ciudad: "+persona.ciudad)

//Punto 5 Ejercicio 2
let libro={
    titulo:"Mi planta Naranja Lima",
    autor:"José Mauro de Vasconcelos",
    anio:1968,
    antiguedadLibro: function(){
        if(2024-this.anio>10){
            return "El libro "+this.titulo+" es antiguo: "+true
        }else{
            return "El libro "+this.titulo+" es antiguo: "+false
        }
    }
}

console.log(libro.antiguedadLibro())*/




//Punto 6 Ejercicio 1
/*let numeros = [1,2,3,4,5,6,7,8,9,10]
let numerosMultiplicados = []

for(let i=1;i<numeros.length+1;i++){
    let numMultp = i*2
    numerosMultiplicados.push(numMultp)
}

console.log("Numeros originales: "+numeros)
console.log("Numeros multiplicados por 2: "+numerosMultiplicados)

//Punto 6 Ejercicio 2
let pares = []
for(let i=0;i<20;i++){
    if(i%2==0){
        pares.push(i)
    }
}
console.log("Primeros 10 numeros pares: "+pares)*/




//Punto 7 Ejercicio 1
document.getElementById("buttonBlue").addEventListener("click",()=>{
    //Seleccionar todos los elementos con la clase "text"
    const parrafos = document.querySelectorAll(".text")

    parrafos.forEach(p =>{ //forEach para iterar sobre cada parrafo
        p.style.color = "blue"
    })
})

//Punto 7 Ejercico 2
document.getElementById("buttonAlert").addEventListener("click",()=>{
    const mensaje__ingresado=document.getElementById("mensaje__ingresado").value
    alert("Has ingresado: "+ mensaje__ingresado)
})




//Punto 8 Ejercicio 1
//elementos seria una NodeList, que es una coleccion de nodos
const elementos = document.querySelectorAll(".elemento")

const mostrarText = (e) =>{
    //target:Permite acceder al elemento especifico que recibio el click(<li>)
    console.log(e.target.textContent);
}

elementos.forEach((e)=>{
    e.addEventListener("click", mostrarText);
});

//Punto 8 Ejercicio 2
const campoText = document.getElementById("campoText")

document.getElementById("buttonHabilitar").addEventListener("click",()=>{
    campoText.disabled = false;
})

document.getElementById("buttonDeshabilitar").addEventListener("click",()=>{
    campoText.disabled = true;
})




//Punto 9 Ejercicio 1
const mensaje = document.getElementById("mensaje")
const correoGuardado = localStorage.getItem("correo");

if(correoGuardado){
    mensaje.innerText = correoGuardado;
}

document.getElementById("formulario").addEventListener("submit",()=>{
    const correo = document.getElementById("text").value
    localStorage.setItem("correo",correo)
    mensaje.innerText = correo
})

document.getElementById("buttonEliminar").addEventListener("click", ()=>{
    localStorage.removeItem("correo")
    mensaje.innerText=""
})