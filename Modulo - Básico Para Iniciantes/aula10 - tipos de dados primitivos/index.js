// Tipos de Dados Primitivos: String, Number, Boolean, Undefined, Null
const nome = 'Luiz'; // String = Texto
const nome1 = "Luiz"; // String = Texto
const nome2 = `Luiz`; // String = Texto

const num1 = 10; // Number = Número
const num2 = 10.52; // Number = Número

let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória.

const aprovado = false; // boolean = true ou false (lógico)
console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

let a = 2;
let b = a;
console.log(a, b);

a = 3;
console.log(a, b);
