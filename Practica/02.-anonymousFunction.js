//Funcion no anonima (Una funcion normal). Siempre debe ir acompanada de el keyword function

function functionNoAnonima(){
    console.log("Soy una desafortunada funcion no anonima")
}

// functionNoAnonima()

// A partir de aqui iremos simplificando la sintaxis hasta generar una correcta funcion anonima

//Parte 1: guardar funcion en una constante
// Considero esto es una mala practica
let simplificandoFuncion = function funtionNoAnonima2(){
    console.log("Soy una desafortunada funcion no anonima guardada en una constante")
}

//Remuevo el nombre de la funcion
simplificandoFuncion = function(){
    console.log("Ahora ya soy anonima, pero... podre simplificarme mas?");
}

// Remuevo el keyword function y se convierte en una arrow function. Esta seria la forma mas simplificada
simplificandoFuncion = (parametros="Si no hay parametros, agrego esto") => {
    console.log(`Ahora soy una arrow function anonima y tengo este parametro: ${parametros}`)
}
// Para llamar una funcion no anonima guardada en una variable mando a llamar la variable como si fuera funcion
simplificandoFuncion()


