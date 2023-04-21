// De esta forma se puede obtener cuantas veces esta un elemento en un array
const numbers = [1,2,3,4,4,4,5,2,3,4,5,6]

const rta = numbers.reduce((obj, element) => {
    if (!obj[element]) {
        obj[element] = 1
    } else {
        obj[element] = obj[element] + 1
    }
    return obj
}, {})

console.log('rta ', rta);

const gamers = [
    {
        name: 'Valentina',
        level: 'hight',
    },
    {
        name: 'Victor',
        level: 'medium',
    },
    {
        name: 'Carlos',
        level: 'low',
    },
    {
        name: 'Flamenco',
        level: 'hight',
    },
    {
        name: 'Billy',
        level: 'hight',
    },
    {
        name: 'Juan',
        level: 'medium',
    },
    {
        name: 'Rigo',
        level: 'hight',
    },
];

// De esta forma puedo crear un array de los elementos level y luego agruparlos con .reduce
const rta2 =  gamers.map(element => element.level).reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})
console.log(rta2);

// Reto 1
const numbers2 = [1,2,3,4,5,6,7,8,9,2,4,6,8,1,3,6,9,1,2,3,4,5,6,7,8,9]

const rta3 = numbers2.reduce((obj, element) => {
    let rango14 = 0
    let rango57 = 0
    let rango89 = 0
    if (obj[element]<= 4 && obj[element] >= 0) {
        rango14 += 1
    } else if(obj[element] > 4 && obj[element] <= 7){
        rango57 += 1
    }else if(obj[element] > 7 && obj[element] <= 9){
        rango89 += 1
    }else{
        rango14 = rango14 + 1
        rango57 = rango57 + 1
        rango89 = rango89 +1
    }
    return obj
}, {})

console.log('rta3', rta3);

// Reto 2
const numbers3 = [1,2,3,4]

const rta4 = numbers3.reduce((sum, item) => sum + item)
console.log(rta4);