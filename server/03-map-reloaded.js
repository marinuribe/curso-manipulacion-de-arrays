const orders = [
    {
        customerName: 'Victor',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Jose',
        total: 30,
        delivered: true,
    },
    {
        customerName: 'Carlos',
        total: 45,
        delivered: true,
    },
    {
        customerName: 'Valeria',
        total: 92,
        delivered: false,
    },
]

// Para mortrar en un nuevo array uno o varios atributos en espesifico
console.log('Original', orders);
const rta = orders.map(itemArr => itemArr.total)
console.log('Reformed', rta);

// Para agregar un nuevo atributo a los objetos del array original
/* const rta2 = orders.map(item => {
    item.tips = 0.1
    return item
})
console.log('With tips', rta2);
console.log('Original', orders); */

// Para agregar un nuevo atributo a los objetos del array original sin modificarlo
const rta3 = orders.map(item => {
    return {...item, tips: 0.1} // En este caso ... copia los objetos sin su referencia en memoria
})
console.log('With tips', rta3);
console.log('Original', orders);

// reto
const products = [
    {
        name: 'lavadora',
        price: 450000,
        stock: 20,
    },
    {
        name: 'computador',
        price: 1450000,
        stock: 15,
    },
    {
        name: 'cama',
        price: 320000,
        stock: 26,
    },
    {
        name: 'escritorio',
        price: 250000,
        stock: 13,
    },
    {
        name: 'nevera',
        price: 825000,
        stock: 11,
    },
]
function addNewAttr(array) {
    return array.map(item => ({...item, tax:Math.trunc(item.price*0.19)}))
    console.log(array);
  }
addNewAttr(products)
