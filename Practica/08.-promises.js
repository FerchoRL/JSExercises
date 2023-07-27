// Función que devuelve una promesa que se resuelve después de un tiempo determinado
//Forma no simplificada
function esperarUnSegundo(time) {
    //Uso el constructor de promise enviandole una funcion con los parametros resolve and reject
    return new Promise(function (resolve, reject) {
        //The setTimeout() method calls a function after a number of milliseconds.
        // setTimeout(function, milliseconds, param1, param2, ...)
        //Pongo condicion para determinar cuando se resuelve
        if (time >= 2000) {
            setTimeout(function () {
                resolve(`Promesa resuelta despues de ${time} segundos`)
            }, time);
        } else {//Si la condicion no se resuelve devuelve el reject
            reject(new Error("Solo puedes esperar a partir de 2 segundos"));
        }
    });
}

//Usamos la promesa y manejamos el resultado
//Forma no simplificada
esperarUnSegundo(2000).then(function (resultado) {
    console.log(resultado)
}).catch(function (error) {
    console.error("Algo salio mal", error)
})

//Forma simplificada
function esperarTiempo(time) {
    return new Promise((resolve, reject) => {
        if (time >= 2000) {
            setTimeout(() => {
                resolve(`Promesa resuelta despues de ${time} segundos`)
            }, time);
        }else{
            reject(new Error("Solo puedes esperar a partir de 2 segundos"))
        }
    });
}

// //Usamos la promesa y manejamos el resultado
//Forma simplificada
esperarUnSegundo(2000).then(resultado => {
    console.log(resultado)
}).catch(error =>{
    console.error("Algo salio mal", error)
})