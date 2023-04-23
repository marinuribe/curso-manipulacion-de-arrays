const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8,9]

const newArr = [...arr1] // Para que no se traiga luego en el concat lo que esta en memoria de referencia
for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    newArr.push(element)
}
console.log(newArr)

const rta = arr1.concat(arr2)
console.log(rta);

// Otra forma de concatenar es con el split operation ...
const rta2 = [...arr1, ...arr2]
console.log('...', rta2);

// Tambien se puede agregar mas elementos modificanso el array original
arr1.push(...arr2) // Los tres puntos indican que se quiere los elementos del array y no el array como tal
console.log('push', arr1);
