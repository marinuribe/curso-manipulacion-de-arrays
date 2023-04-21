const numbers = [1, 2, 3, 4, 5]

// Forma tradicional de sumar los numeros del array
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    sum = sum + item
}
console.log(sum);

// De esta forma se puede reducir mas facil el array sin tener que declarar variables.
const rta = numbers.reduce((sum2, element) => sum2 + element, 5)
console.log('rta', rta);

