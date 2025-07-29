let nombre = 'Andres'
console.log(nombre)


//.filter(): crea un nuevo arreglo que contiene solo los elementos que cumplen la condicion
//sintaxis

/* const nuevoArray = .filter((elemento, indice)=>{})
*
*/
const edades = [15, 18, 22, 13, 40]

const mayoresDeEdad = edades.filter(edad  =>edad  >=  18)
console.log (mayoresDeEdad)

//TIP (Lo necesitan) : .startsWitch("C") (sirve para buscar letras) 

const nombres =["Carlos", "Ana", "Camila", "Luis", "Cristian", "Sofia", "Marcela", "Carolina"]
const nombresC = nombres.filter(nombre => nombre.startsWith("C")) 
console.log (nombresC)

