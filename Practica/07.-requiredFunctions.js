//Sintaxis para usar require
// const math = require('./exportedFunctions/mathExport')
// console.log(math.add(5,9))
// console.log(math.PI)

//Tambien puedo guardar en variables los metodos
const { add, subtract, PI} = require('./exportedFunctions/mathExport');

console.log(add(1,2))
console.log(subtract(1,2))
console.log(PI)