// The forEach() method calls a function for each element in an array.
// array.forEach(function(currentValue, index, arr), thisValue)


//For each with arrow functions
const fruits = ['Banana','Apple','Orange','Pineaple']

const readArray = (currentValue, index, arr) => {
    console.log(`Mi current value es: ${currentValue} con el index ${index} y el size del array es: ${arr.length}`);
}

// fruits.forEach(readArray)

//Foreach with normal functions
function readArray2(currentValue, index, arr){
    console.log(`Mi current value es: ${currentValue} con el index ${index} y el size del array es: ${arr.length}`);
}

// fruits.forEach(readArray2);

//Implementing the function in the forEach method
fruits.forEach((fruit, index, arr) => {
    console.log(`Mi fruit es: ${fruit} con el index ${index} y el size del array es: ${arr.length}`);
})


//Using forEach in json List

const myJson = [
    {
        name: "Fercho",
        age: 30
    },
    {
        name: "Jose",
        age: 20
    },
    {
        name: "Cris",
        age: 31
    }
]

myJson.forEach(guy => console.log(`name: ${guy.name} with age: ${guy.age}`))