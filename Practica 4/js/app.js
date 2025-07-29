let nombre = 'Andres';
let apellido = 'Saenz';
let edad = 43;
console.log(nombre)
//funcion 1
function cliente(nombre){
    console.log(`Mi nombre es ${nombre}`) 
}

cliente(nombre)

//funcion 2
function sumaDosNumeros(n1, n2){
    console.log(n1 + n2)

}

sumaDosNumeros(5, 3)

function sumDosNumeros(n1, n2){
    return(n1 + n2)
}
let resultado = sumDosNumeros(7, 9)
console.log(resultado)

//Booleano
let esEstudiante = true
let noEstudiante = false

//variable undefined
let ciudad
console.log(ciudad)

//Valor null
let ciudad2 = null

//Arrow function: dunciones de flecha
sumaDosNumeros = (n1, n2)=>{
    console.log(`Esta es la funcion flecha: ${n1 + n2}`)
}
sumaDosNumeros(5, 3)