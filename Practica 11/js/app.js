//POO: Programación Orientada a Objetos y es un paradigma de programacion
//para JavaScript fue adoptado con la implementación de ECMAScript 6

//Clase: Es un modelo 
//Objeto: Es el que instancia la clase
//Metodos: Son las acciones que el objeto puede realizar
//Atributos: Son las propiedades

//Clases y constructores

//class Persona {
//constructor(nombre, edad){
//this.nombre = nombre;
//this.edad = edad;
//}
//saludar() {
//console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
//}
//}

//Instanciación de la clase Persona
//const persona1 = new Persona("Juan", 30);

//Llamada al método saludar
//persona1.saludar();

//ejemplo de veterinaria 



//Clase Mascota
const veterinaria = {
    nombre: "firualais",
    enfermedad: "Parvovirus",
}

class Mascota {
    constructor(nombre, enfermedad) {
        this.nombre = nombre;
        this.enfermedad = enfermedad;
    }
    verificarEnfermedad() {
        console.log(`La mascota ${this.nombre} tiene la enfermedad ${this.enfermedad}`)
    }
}

const mascota1 = new Mascota (veterinaria.nombre, veterinaria.enfermedad);
mascota1.verificarEnfermedad();