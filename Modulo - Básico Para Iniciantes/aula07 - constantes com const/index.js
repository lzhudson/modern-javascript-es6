
// String = Text | Number = Número
const nome = 'João'; // String
console.log(nome);
// const nome2; // Sempre colocar um valor ao declarar uma constante
// nome = 'Otávio'; // Não pode refazer uma atribuição a uma constante
// + - * /
const primeiroNumero = '5'; //510  // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero);
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
// Obs: O ideal seria sempre seria evoluir o valor da variavel ao invés de modifica-lo, fazendo a atribuição a em uma outra variavel e modificando-o.

console.log(typeof primeiroNumero);
console.log(typeof (primeiroNumero + segundoNumero));
