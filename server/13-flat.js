const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
const matriz2 = [
    [1,2,3],
    [4,5,6,[7,8,9]],
    [7,8,9,[5,7,1,[3,8,9]]],
]
// Forma tradicional de aplanar un array dentro de un array con un for

const newArr = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArr.push(element)
    }
}
const rta = matriz2.flat(3) // El tres indica el numero de niveles al cual se quiere aplanar
console.log('for', newArr);
console.log('flat', rta);