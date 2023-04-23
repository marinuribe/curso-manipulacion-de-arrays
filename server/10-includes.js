const animals = ['giraffe', 'elephant', 'tigger']

// Forma de emular el .includes con un for
let rta = false 
for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    if (element === 'elephant') {
        rta = true
        break
    }
}
console.log('for', rta);

// El includes nos permite obtener un true o un false en caso de encontar al menos un elemento dentro del array que cumpla cierta condicion
const rta2 = animals.includes('tigger')
console.log('includes', rta2);

// Reto
const words = ['hola', 'masa', 'caneca', 'rocio', 'vaso']

function findWord(array, term) {
    return array.find(item => item === term)
}

const rta5 = findWord(words, 'masa')
console.log(rta5);