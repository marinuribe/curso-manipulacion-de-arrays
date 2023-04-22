const numbers = [1,2,3,4,5,6,7,8]
// Esta seria la forma tradicional de recorrer el array para verificar si alguno es par
let par = false
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
        par = true
        break
    }
}
console.log(par);

// Con .some esta tarea resulta mas facil
const  rta2 = numbers.some(item => item % 2 === 0)
console.log(rta2);

// Tambien se puede usar para evaluar atributos de objetos
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

const  rta3 = orders.some(item => item.delivered)
console.log('rta3', rta3);

// Ejemplo mas complejo con fechas

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        tittle: 'date of work'
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        tittle: 'date of work'
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        tittle: 'date of work'
    },
    {
        startDate: new Date(2021, 1, 1, 22),
        endDate: new Date(2021, 1, 1, 23),
        tittle: 'date of work'
    },
    {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 23, 18),
        tittle: 'date of work'
    },
    {
        startDate: new Date(2021, 1, 1, 19),
        endDate: new Date(2021, 1, 1, 20),
        tittle: 'date of work'
    },
]
const newAppointment = {
    startDate: new Date(2021, 1, 1, 2),
    endDate: new Date(2021, 1, 1, 3, 30),
}

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

function isOverlaping(newDate) {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        )
    })
}

const evaluationDate = isOverlaping(newAppointment)

console.log( 'evaluation date', evaluationDate);