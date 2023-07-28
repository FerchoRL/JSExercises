//Declare URL and Request
const PETURL = 'https://petstore.swagger.io/v2/pet'
const PETREQUEST = require('./data/petJsonBody.json');

//Create function to call Post API and create pet
//Use then and catch
function createPet(jsonPet) {
    //Return promise resolve or reject
    return new Promise((resolve, reject) => {
        //Create options with method, headers and body
        const opciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonPet)
        };

        //Call API with fetch
        fetch(PETURL, opciones)
            .then(response => {
                //If result is not successfull return Error
                if (!response.ok) throw new Error('Error en la respuesta de la API')
                //If result is successfull return responseJson
                return response.json()
            })//Resolve returning the data
            .then(data => {
                resolve(data);
            })//Reject returning error
            .catch(error => {
                reject(error);
            })
    })
}

// createPet(PETREQUEST)
//     .then(response => {//If receive resolve use then
//         console.log(response)
//     })
//     .catch(error => {//If receive reject use error
//         console.error('Error al llamar la API', error)
//     })

//Create pet2 with async and await
const createPet2 = async (jsonPet) => {
    // Create the options 
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonPet)
    };
    //Todo esto regresa una promesa
    try {
        //Call API and implement await for the response
        const response = await fetch(PETURL, opciones);
        //If response ok fail then throw error
        if(!response.ok){
            throw new Error('Error en la respuesta de la API');
        }
        //If response ok
        return response.json();
    } catch (error) {
        throw error
    }
}
// Quizas esta funcion esta demas pues puedo validar arriba
async function callApiAndObtainResponse(){
    try {
        const result = await createPet2(PETREQUEST);
        console.log(result.id)
    } catch (error) {
        console.log(error)
    }
}

callApiAndObtainResponse()