let nombre = 'Andres'
console.log(nombre)


//ejercicio
const numero = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
//sintaxis para escribir forEach()
// array.forEach(Parametros: (Elementos, indice))=>{}
    numero.forEach((numero,i)=>{
        if(numero%2 === 0)
        console.log(`numero#: ${i+1}: ${numero/1}`)
    })
    
