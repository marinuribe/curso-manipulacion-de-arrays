const letters = ['a', 'b', 'c']
const appSelector = document.querySelector('#app')
const tasksSelector = document.querySelector('#tasks-list')

const products = [
    {name: 'linterna', price: 20000},
    {name: 'pegaloca', price: 6000},
]

const tasks = ['read boock', 'clean the room', 'ride bike']

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
}

letters.forEach(printArray => {
    console.log(printArray);
})

/* products.forEach(printProducts => {
    appSelector.innerHTML += `<li>${printProducts.name} : ${printProducts.price}</li>`
}) */

tasks.forEach(task => {
    tasksSelector.innerHTML += `<label><input type='checkbox'>${task}</label><br>`
})