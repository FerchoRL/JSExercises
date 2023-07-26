//Operador de propagacion
/**
 * Permite expandir los elementos de un iterable (como un array o un objeto) en 
 * lugares donde se esperan cero o más argumentos (para funciones) o elementos (para arrays).

El operador de propagación se representa con tres puntos consecutivos: ...
 */

const peliculas = ["El retorno del Rey", "End Game", "Welcome to Racoon City"]

const juegos = ["TLOU 1 Y 2", "RE 2 remake", "Far Cry 5"]

//Antes de ES6 para unir 2 listas se hacia de esta forma y lo vuelve un string 
let listaDeGustos = peliculas + juegos;
// console.log(listaDeGustos);

//Ahora con ES6 para unir 2 listas es de esta forma
//Si a pizza le agrego 3 ... al principio me agrega letra por letra al array no se por que
//Expandir elementos de un array:
let gustosES6 = [...peliculas, ...juegos, 'Pizza']
//el operador de propagación ...peliculas y ...juegos expanden sus elementos, de modo que se insertan uno a uno en gustosES6. 
//De esta forma, creamos un nuevo array gustosES6 que contiene todos los elementos de peliculas, juegos y agregamos el elemento pizza
// console.log(gustosES6)


// Pasar argumentos a una funcion

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
/**
 * En este caso, el operador de propagación ...numbers expande los elementos del numbers y los
 * pasa como argumentos individuales a la función sum. Equivalentemente, esto es lo mismo que llamar sum(1, 2, 3)
 */
const result = sum(...numbers);
// console.log(result)

//Si el array tiene menos valores que el numero de argumentos de la funcion, entonces devuelve NaN


//Clonar un objeto

const originalObj = { name: 'Ferchower', age: 30, job: 'Not apply', hobbies: 'play soccer and genshin' }
const clonedObj = { ...originalObj }
// console.log(clonedObj)


//Extraer partes de un objeto
const { name, age, ...lastProperties } = originalObj
//Los primeros dos elementos del objeto los guardo en variables string (name, age)
// console.log(`My name is: ${name} and my age is ${age}`);
//El resto de propiedades del objeto(...lastProperties) se guardan en lasPromerties (objeto json)
// console.log(lastProperties)

//Extraer partes de un array
const numberList = [10, 58, 952, 111, 43, 670, 759]
//Los primeros dos elementos del array los guardo en variables string (first, second)
const [first, second, ...lastElements] = numberList
// console.log(first)//10
// console.log(second)//58
//El resto de elementos del array(...lastElements) se guardan en lastElements (array)
// console.log(lastElements)//[952, 111, 43, 670, 759]

//Extraer los ultimos elementos del array
//Utilizo slice enviandole en negativo la cantidad de elementos finales que necesito
// console.log(numberList.slice(-3))//[43, 670, 759]
//Creo que con spread operator o sin el se podrian obtener los ultimos elementos
const [...lastNumbers] = numberList.slice(-3)
// console.log(lastNumbers)//[43, 670, 759]

//Ignorar ciertos elementos del array u objeto. colocando comas vacios podemos omitir el elemento
const [primero, , tercero, ...ultimos] = numberList
// console.log(primero)//10
// console.log(tercero)//952
// console.log(ultimos)//[ 111, 43, 670, 759 ]

//Extraer partes de un array anidado. Convendria mejor con un reduce
const nestedArray = [1, [2, 3], 4, [5, 6, 7], 8]
const [,[secondElement, thirdElement], , ...restoDelArray] = nestedArray;
console.log(secondElement)
console.log(thirdElement)
console.log(restoDelArray)