let nome = 'João'; // String .
let nome2; // Declarou a variável.
nome2 = 'Qualquer valor'; // Inicializando a variável.
console.log(nome2);
nome2 = 'Otávio'; // Mudaando o  valor da variável a partir dessa linha de código.
console.log(nome2);
console.log(nome, 'nasceu em 1984.');
console.log('Em 2000',nome,'conheceu Maria.');
console.log(nome,'casou-se com Maria em 2012.');
console.log('Maria teve um filho com',nome,' em 2015.');
console.log('O filho de',nome,' se chama Eduardo.');
// let nome2; // Erro, pois uma variável com o mesmo nome já foi declarada.

/* Regras de Criação de variáveis. */
// Não podemos criar variáveis com palavras reservadas.
// let if;
// Variáveis precisam ter nomes significativos.
// let n = 'João'; // Errado 
let nomeCliente = 'João'; // Certo
console.log(nomeCliente);
// Não pode começar o nome de uma variável com número.
// let 1nome;
// Não podem conter espaços ou traços
// let nome-Cliente; // Errado
// let nome Cliente; // Errado
// Utilizamos camelCase
// Não podemos redeclarar variáveis com let
// NÂO UTILIZE VAR, UTILIZE LET.
let nomeCompleto = 'Hudson Holanda';
let nomeCompletoDoCliente = 'Luiz Hudson';
console.log(nomeCompletoDoCliente);
// Case-sensitive: Variaveis com letras maiusculas e letras minusculas são diferentes.
let meuNome = 'Hudson';
let meunome = 'Luiz';
console.log(meuNome, meunome);
/* ************************************* */