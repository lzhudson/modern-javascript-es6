let num1 = 9.54578;
let num2 = 16;
// Formula Raiz Quadrada = numero ** 0.5;
console.log(num2 ** 0.5);
console.log(100 / 0);

// Math.floor(); Arredondam o numero para inteiro menor mais proximo.
//  let num2 = Math.floor(num1);
// Math.ceil(); Arredondam o numero para inteiro maior mais proximo.
// let num2 = Math.ceil(num1);
// Math.round(); Arredonda o numero para o inteiro mais proximo.
// let num2 = Math.round(num1);
// Math.max(); Retorna o maior numero entre varios numeros passando por parametro
console.log(Math.max(1,2,3,4,5,6,7,8,-10,-50,1500,9,8,7,6));
// Math.min(); Retorna o menor numero entre varios numeros passando por parametro
console.log(Math.min(1,2,3,4,5,6,7,8,-10,-50,1500,9,8,7,6));
// Math.random(); Retorna um numero aleatorio decimal.
// Formula Aleatorio = Math.random() * (max - min) + min
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);