const names = ['Billy', 'Juan', 'Luis', 'Martha']

let rtaFinal = ''
const separator = '--'
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    rtaFinal = rtaFinal + element + separator
}
console.log(rtaFinal);

//Forma mas sencilla de hacer esto usando .join
const rta = names.join('--')
console.log('join', rta);

// Uso de .split
const paragraph = 'This year I will get a job as a software developer'
const paragraphArray = paragraph.split(' ').join('-')
console.log('split', paragraphArray);
