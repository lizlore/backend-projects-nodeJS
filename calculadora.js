'use strict'

const params = process.argv.slice(2);

const number1 = parseFloat(params[0]);
const number2 = parseFloat(params[1]);

const plantilla = `
La suma es: ${number1 + number2}
La resta es: ${number1 - number2}
La multiplicacion es: ${number1 * number2}
La division es: ${number1 / number2}
`;

console.log('Hola mundo con NodeJS', params);
console.log(plantilla);
