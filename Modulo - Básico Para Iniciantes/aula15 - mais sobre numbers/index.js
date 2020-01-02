// IEEE 754-2008
let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 10.578945504; // number
let num4 = 10; // nummber

// .toString(): Retorna o valor em forma de String.
console.log(num1.toString() + num2);
console.log(num1.toString(2));
// num1 = num1.toString(); Altera o valor da variavel num1 para num1 no formato de String
console.log(typeof num1);
// .toFixed(); Retorna o valor com apenas duas casas decimais após o ponto ou seja arredonda a variavel para o numero mais preciso.
console.log(num3.toFixed(2));
// .isInterger(); Retorna o true se o numero for inteiro e falso se não for.
console.log(Number.isInteger(num1));
// let temp = num1 * 'Ola';
let temp = num1 * '5';
// .isNaN(); Retorna true se o valor for um NaN(Not a Number) e falso se não for.
console.log(Number.isNaN(temp));

let num5 = 0.7;
let num6 = 0.1;
/* num5 += num6; // num5 = num5 + num6; // 0.8
num5 += num6; // 0.9
num5 += num6; // 1.0
num5 += num6; // 1.1
num5 += num6; // 1.2
num5 += num6; // 1.3
num5 += num6; // 1.4
num5 += num6; // 1.5
num5 += num6; // 1.6
num5 += num6; // 1.7
num5 += num6; // 1.8
num5 += num6; // 1.9
num5 += num6; // 2.0 */ 
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.8
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 0.9 
num5 = ((num5 * 100) + (num6 * 100)) / 100; // 1.0
num5 = parseFloat(num5.toFixed(2));
console.log(num5);
console.log(Number.isInteger(num5));
