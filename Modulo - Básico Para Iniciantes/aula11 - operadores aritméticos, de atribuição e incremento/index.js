/** 
 * Aritméticos
 * "+" - Adição / Concatenação
 * "-" - Subtração
 * "/" - Divisão
 * "*" - Multiplicação
 * "**" - Potenciação
 * "%" - Resto da divisão
 */
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(num1 + num2); // Adição
console.log(num1 - num2); // Subtração
console.log(num1 / num2); // Divisão
console.log(num1 * num2); // Multiplicação
console.log(num1**2); // Potenciação
console.log(num2 % num1); // Resto da divisão

console.log(num1 + num2 * num3);
/** Precedência de Operadores
 * ()
 * **
 * *, /, %,
 * +, -
 */ 
// Os parênteses alteram a ordem de precedência de operadores.
console.log((num1 + num2) * num3);
console.log(num1 * num2 / num3);

// Incremento = + 1
// Obs: incrementos não podem ser usados em constantes.
let contador = 1;
// No pré incremento ele executa primeiro o incremento e depois retorna o valor da variavel.
// No pós incremento ele primeiro retorna o valor e depois incrementa.
// contador = contador + 1;
/* contador++; //2
contador++; //3
contador++; //4
contador++; //5 */
console.log(contador++);
console.log(++contador);

// Decremento = - 1;
// Assim como no incremento o decremento não pode ser usado em constantes.
// No pré decremento ele executa primeiro o incremento e depois retorna o valor da variavel.
// No pós decremento ele primeiro retorna o valor e depois incrementa.
// contador = contandor - 1;
/** Operadores de atribuição
 * += 
 * *=
 * -=
 * **=
 * /=
  */

console.log(contador--);
console.log(--contador);
const passo = 5;
let contador2 = 0;
contador2 += passo;
console.log(contador2);
contador2 += passo;
console.log(contador2);
contador2 += passo;
console.log(contador2);

contador2 *= 10;
console.log(contador2);
contador2 *= 10;
console.log(contador2);

const num4 = 10;
const num5 = 'Luiz';
console.log(num4 * num5); // NaN - Not a Number (Não é número)
// const num6 = parseInt('5'); // Retorna apenas o valor inteiro
// const num6 = parseFloat('5.2'); // Retorna apenas o valor flutuante
const num6 = Number('5.2'); // Retorna o valor conforme o passado por parametro analisando se é um inteiro ou flutuante. 
const num7 = 20;
console.log(num6 * num7);
console.log(typeof num6);
console.log(typeof num6);
console.log(num6 + num7);

