/* const numbers = ['1', '2', '3', '4', '5'];
const newArr = [] */

// Manera tradisional de llenar newArr, .push() es un metodo inmutable porque no modifica el array original
/* for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    newArr.push(element + '++')
}
console.log('old', numbers);
console.log('new', newArr);

// Pero esto tambien se puede hacer con .map
const numbers = ['1', '2', '3', '4', '5'];
const newArr = numbers.map(newItems => newItems + '++')
console.log('old', numbers);
console.log('new', newArr); */

// Ejemplo de clase, crear elementos en html con .map en vez de usar un forEach
const appSelector = document.querySelector('#app')
const products = [
    {name: 'linterna', price: 20000},
    {name: 'pegaloca', price: 6000},
]
const list = products.map(printProducts => {
    return `<li>${printProducts.name} : ${printProducts.price}</li>`
})
appSelector.innerHTML = list.join('') // Para convertir el array a un string

function multiplyElements(array) {
    newArr = array.map(newNumbers => newNumbers*2)
    return newArr
 }
multiplyElements([2, 4, 6, 8])
 console.log(newArr);