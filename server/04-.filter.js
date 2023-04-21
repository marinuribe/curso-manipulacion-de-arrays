const colors = ['blue', 'yellow', 'red', 'purple']

// Si quisiera hacer un .filter de colors[] de la forma tradicional seria asi
const newArrColors = []

for (let i = 0; i < colors.length; i++) {
    const item = colors[i];
    if (item.length > 4) {
        newArrColors.push(item);
    }
}

console.log('new', newArrColors);
console.log('original', colors);

// Forma de hacer lo mismo pero mucho mas sencillo
const rtaFilter = colors.filter(item => item.length > 4)
console.log('filter', rtaFilter);

// Condicional de .filter mas complejo
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
        customerName: 'Carlos',
        total: 200,
        delivered: true,
    },
    {
        customerName: 'Valeria',
        total: 92,
        delivered: false,
    },
]

const rta2 = orders.filter(item => item.delivered)
console.log(rta2);

// Ejemplo con doble condicion
const rta3 = orders.filter(item => item.delivered && item.total > 50)
console.log('rta3', rta3);

// Programando buscador

function google(name) {
    return orders.filter(item => 
        item.customerName.includes(name))
}
const result = google('s')
console.log('Search result', result);