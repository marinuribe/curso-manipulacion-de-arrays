const numbers = [1,30,49,29,10,13];

// Forma de hacerlo con for
let rta = undefined
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 300) {
        rta = element
        break
    }
}
console.log('for', rta);

// Encontrar el primer elemento del array que cumpla cierta condicion con .find
const rta2 = numbers.find(item => item === 300)
console.log('.find', rta2);

// Encontrar el primer elemento que cumpla cierta condicion en un array de objetos
const products = [
    {
      name: "Pizza",
      price: 12,
      id: 001
    },
    {
      name: "Burger",
      price: 23,
      id: 002
    },
    {
      name: "Hot dog",
      price: 34,
      id: 003
    },
    {
      name: "Hot cakes",
      price: 355,
      id: 004
    },
  ];

  const rta4 = products.find(item => item.id === 003)
  console.log('rta4OBJ', rta4);
  const rta5 = products.findIndex(item => item.id === 003)
  console.log('rta4Index', rta5);