//Archivo para verificar el scope (alcance) que tienen los tipos de variable: var, const y let

// const variable nunca cambia su valor
const VARCONST = "YO NUNCA CAMBIO"
var variableVar = "Yo soy una VAR"

function scopeVariables(){
    // variable let: Funciona de forma local y se puede cambiar su valor (reasignar)
    let variableLet = "Hola mundo cruel"
    console.log(variableLet);
    variableLet = "Actualizo mi variable let"
    console.log(variableLet);
    // Tambien puedo acceder a mis variables globales: const y var
    // console.log(VARCONST)
}

//Probando con let
//console.log(variableLet)// Result: variableLet is not defined
scopeVariables();//Mando a llamar la funcion para usar su variable let

//Probando var
//Puedo acceder de vorma global y actualizar su valor
console.log(variableVar)
variableVar = "Como variable var puedo actualizarme"
console.log(variableVar)


// console.log(VARCONST)
//VARCONST = 547;//Result: Assignment to constant variable.