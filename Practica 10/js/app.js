//Uso basio de if y else

    //puedeConducir = (edad)=> {
        //if (edad >= 18) {
            //console.log("Puedes conducir")
            //} else {
                //console.log("No puedes conducir")
                //}
            //}          

//puedeConducir(18);

//Creamos un obejto JSON
//const usuario = {
    //nombre: "Juan",
    //rol: "admin",
//}


//const verificarPermisos = (usuario) => {
    //if (usuario.rol === "admin") {
        //console.log("Acceso total")
    //} else if (usuario.rol === "editor") {
        //console.log("Puedes editar")
        //} else {
        //console.log("Eres un visitante")
    //}
//}

//verificarPermisos(usuario);


//Sancoho
const persona1 = {
    nombre: "Juan",
    verduras: true,
}

const persona2 = {
    nombre: "Cristian",
    verduras: false,
}

const verificarVerduras = (sancocho) => {
    if (sancocho.verduras === true) {
        console.log(`${sancocho.nombre} ,puede ir al sancocho`);
    } else {
        console.log(`${sancocho.nombre} ,no puede ir al sancocho`);
    }
}

verificarVerduras(persona1);
verificarVerduras(persona2);