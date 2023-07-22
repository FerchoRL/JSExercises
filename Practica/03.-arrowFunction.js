const names = [
    {name: 'Ferch', age: 29},
    {name: 'Jos', age: 20},
    {name: 'Cris', age: 21},
];


//Arrow function sin parametros
let myArrowFunction = () => {
    console.log("Soy una maldita arrow function sin parametros :(")
}

//Arrow Function en un solo step
myArrowFunction = (() => console.log("Arrow function de un solo step"))
// myArrowFunction();

//ArrowFunction con un parametro y mas de un step
myArrowFunction = (listaDePersonas) => {
    for(let i = 0; i<listaDePersonas.length;i++){
        console.log(`Wasap bro, soy ${listaDePersonas[i].name}`)
    }
}

//Arrow function con un parametro y multiples steps simplificado

myArrowFunction = listaDePersonas => {
    for(let i = 0; i<listaDePersonas.length;i++){
        console.log(`Wasap bro, soy ${listaDePersonas[i].name}`)
    }
}

//ArrowFunction con un parametro y 1 step
myArrowFunction = ((listaDePersonas) => console.log(listaDePersonas));//Me imprime el array

//ArrowFunction con un parametro y 1 step simplificado
myArrowFunction = listaDePersonas => console.log(listaDePersonas);

//ArrowFunction con multiples parametros
myArrowFunction = (listaPersonas, edadFiltro) => {
    for(let i = 0; i<listaPersonas.length;i++){
        const persona = listaPersonas[i];
        if(persona.age <= edadFiltro)
        console.log(`Wasap bro, tas muy morro wey. Piertede ${persona.name}`)
    }
}

//Arrow functions con multiples parametros por default
myArrowFunction = (par1="Chango apestoso", par2="Me la pelas", par3="ntc es puro pedo") => {
    console.log(`${par1} ${par2} ${par3}`)
}


myArrowFunction("Kianita","que chow vova");
