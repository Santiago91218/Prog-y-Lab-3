//Ejercicio 2
console.log("Ejercicio 2: corriendo desde typescript")

//Ejercicio 3
let texto:string ="Hola, TypeScript!"
let numero:number=123
let booleano:boolean=true
let fecha:Date=new Date("2024-09-09")

const divOne:HTMLElement | null = document.getElementById("divId1")

if(divOne){
    divOne.innerHTML=`
    <p>Texto: ${texto}</p>
    <p>Numero: ${numero}</p> 
    <p>Booleano: ${booleano}</p>
    <p>Fecha: ${fecha.toLocaleDateString()}</p>` 
}

    
//Ejercicio 4
function convertirString(num:number):string{
    const numString:string= num.toString()
    return numString
}

const divTwo:HTMLElement | null = document.getElementById("divId2")
if(divTwo){
    divTwo.innerHTML=`
    <p>Número convertido a cadena: ${convertirString(456)}</p>` 
}


//Ejercicio 5
function sumarElementos(array:number[]):number{
    let total:number=0
    for(let i=0;i<array.length;i++){
         total+=array[i]
    }
    return total
}

let arrayNumeros:number[]=[3,3,3,3,3]

const divThree:HTMLElement | null = document.getElementById("divId3")
if(divThree){
    divThree.innerHTML=`
    <p>Suma del array: ${sumarElementos(arrayNumeros)}</p>` 
}


//Ejercicio 6
interface Estudiante{
    nombre:string,
    edad:number,
    curso:string
}

const estudiante1:Estudiante={
    nombre:"Juan",
    edad:20,
    curso:"Matemáticas"
}

const divFour:HTMLElement | null = document.getElementById("divId4")
if(divFour){
    divFour.innerHTML=`
    <p>Estudiante: ${estudiante1.nombre}</p>
    <p>Edad: ${estudiante1.edad}</p>
    <p>Curso: ${estudiante1.curso}</p>` 
}


//Ejercicio 7
type Direccion={
    ciudad:string,
    calle:string,
    cp:number
}

const miDireccion:Direccion={
    ciudad:"Ciudad",
    calle:"Av. Principal",
    cp:12345
}
const divFive:HTMLElement | null = document.getElementById("divId5")
if(divFive){
    divFive.innerHTML=`
    <p>Dirección: Calle:${miDireccion.calle}, Ciudad:${miDireccion.ciudad}, CP:${miDireccion.cp} </p>` 
}


//Ejercicio 8
interface Usuario{
    nombre:string,
    correo:string
    saludar(): string
}

const user1: Usuario = {
    nombre: "Ana",
    correo: "ana@gmail.com",
    saludar: function (): string {
        return `Hola, mi nombre es ${this.nombre}`;
    }
}

const divSix:HTMLElement | null = document.getElementById("divId6")
if(divSix){
    divSix.innerHTML=`
    <p>${user1.saludar()}</p>` 
}


//Ejercicio 9
class Persona{
    nombre:string
    edad:number

    constructor(nombre:string,edad:number){
        this.nombre=nombre
        this.edad=edad
    }

    presentarse():string{
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años` 
    }
}

const persona1 = new Persona("Carlos",30)
const divSeven:HTMLElement | null = document.getElementById("divId7")
if(divSeven){
    divSeven.innerHTML=`
    <p>${persona1.presentarse()}</p>` 
}


//Ejercicio 10
class Caja<T>{
    value:T

    constructor(value:T){
        this.value=value
    }

    getValue():T {
        return this.value;
    }
    setValue(newValue:T):void {
        this.value = newValue;
    }
}

const cajaTexto = new Caja<string>("Mensaje secreto");
const cajaNumero = new Caja<number>(42);

const divEight:HTMLElement | null = document.getElementById("divId8")
if(divEight){
    divEight.innerHTML=`
    <p>Contenido de cajaDeTexto:${cajaTexto.getValue()}</p>
    <p>Contenido de cajaDeNumero:${cajaNumero.getValue()}</p>` 
}


//Ejercicio 11
function identidad<T>(valor: T): T {
    return valor;
}
const divNine:HTMLElement | null = document.getElementById("divId9")
if(divNine){
    divNine.innerHTML=`
    <p>Identidad del número: ${identidad<number>(123)}</p>
    <p>Identidad del texto: ${identidad<string>("texto")}</p>` 
}


//Ejercicio 12
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

const colorFav=Color.Azul

const divTen:HTMLElement | null = document.getElementById("divId10")
if(divTen){
    divTen.innerHTML=`
    <p>Color favorito: ${colorFav}</p>` 
}