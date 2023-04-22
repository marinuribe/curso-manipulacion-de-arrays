const numbers = [1,30,39,10,13];
// Forma tradicional de virificar si todos los elementos del array cumplen alguna condicion

let rta = true 
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element >= 40) {
        rta = false
    }
}
console.log('rta', rta);

// De esta forma se hace lo mismo pero mas facil 
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);

// Reto: verificar que todos las personas del siguiente array sean menores de 15 años
const team = [
    {
      name: "Nicolas",
      age: 18,
    },
    {
      name: "Andrea",
      age: 80,
    },
    {
      name: "Zulema",
      age: 20,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];
  const rta3 = team.every(item => item.age >= 15)
  console.log('rta3', rta3);