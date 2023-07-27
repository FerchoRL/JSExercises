//Usando then and catch
//API URL: https://petstore.swagger.io/v2/pet/findByStatus?status=available
function obtenerDatos() {
    //Llamo a una get API y obtengo una lista de mascotas
    return fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
        //Ingreso y regreso a su response convirtiendola a json
        .then(response => response.json())
        //Indico que la respuesta se guarda en datos y mediante find filtro el pet
        .then(datos => {
            const myPet = datos.find(pet => pet.id === 9223372036854603000)
            console.log(`My pet desde then:`)
            console.log(myPet)
        })
        .catch(error =>{
            console.log(`Mi error desde then: ${error}`)
        })
}


obtenerDatos();

//Usando async and await
//async se coloca antes de una función para indicar que esa función es asíncrona y que devolverá una promesa automáticamente
const getData = async () => {
    try {
        //await solo puede usarse dentro de una función async
        //la ejecución del código se detiene en el wait hasta que la promesa se resuelva
        const response = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
        const data = await response.json();
        const myPet = data.find(pet => pet.id === 9223372036854603000)
        console.log(`My pet desde async:`)
        console.log(myPet)
        // Si la promesa es rechazada, se lanzará una excepción que se puede capturar utilizando un bloque try-catch.
    } catch (error) {
        console.log(`Mi error desde async: ${error}`)
    }
}
getData()