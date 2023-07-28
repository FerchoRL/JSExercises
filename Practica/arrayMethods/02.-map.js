//Nos permite transformar los elementos de un arreglo
//Recibe un arreglo de longitud N y regresa un nuevo arreglo de la misma longitud
// array.map(function(currentValue, index, arr), thisValue)

const numeros = [1,2,3,4,5];

//Verify sintaxis
const verifySintaxis = (currentValue, index, arr) => {
    console.log(`Mi current value es: ${currentValue} index is: ${index} and arr size is: ${arr.length}`)
    return currentValue * index
}
//Return map with values multiply by the index
console.log(numeros.map(verifySintaxis));

//Implemento la funcion dentro de map
let multiplicarlos = numeros.map(function(number, index){
    return number * index;
})

//simplifico la funcion retornando multiplicacion de numero por si mismo
multiplicarlos = numeros.map( number => number * number)

console.log(multiplicarlos);


//Ejemplo mas desarrollado
const mascotas = [
    { name: 'Pelusa', age: 2, tipo: 'Gato'},
    { name: 'Caligari', age: 3, tipo: 'Perro'},
    { name: 'Chanchito', age: 10, tipo: 'Oso'},
    { name: 'Pulga', age: 1, tipo: 'Perro'},
];

//Regreso mi array modificado segun el tipo de mascota
const addProperty = (pet) => {
    if(pet.tipo === 'Perro') pet.newProperty = 'Propiedad para el perro'
    else pet.newProperty = 'Propiedad para cualquier pet'
    return pet
}

let petList = mascotas.map(addProperty);
console.log(petList);
