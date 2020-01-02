let umaString = 'Um texto';
console.log(umaString);
// Escape de caracteres: usar uma barra (\) para escaparmos(exibirmos) caracteres especiais
// Ex:
let outraString = 'Um \"texto\"';
console.log(outraString);
// Strings são indexaveis ou seja possuem indices como em um array(vetor).
// Os indices de uma String sempre começam em 0 que representa o primeido indice(elemento) da String.
// Ex:
console.log(umaString[4]);
// String.charAt(value indice): Retorna o valor relacioando ao indicie passado por parametro.
console.log(umaString.charAt(5));
// String.charCodeAt(value indice): Retorna o valor contido na tabela asc daquele determinado indice passado por parametro.
console.log(umaString.charCodeAt(4));
// String.concat('string values'): Retorna a String concatenada com um ou mais valores passado por parametro.
console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'lindo', ' ','dia'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia`);
// String.indexOf('string value'): Retorna o indice de onde começa a string passada por parametro, se a palavra não for encontrada retorna -1, se passado um segundo parametro o javascript entende que deve começar a busca por aquele indice.
console.log(umaString.indexOf('texto'));
// String.lastIndexOf('string value'): Retorna o indice de onde começa a string passada por parametro começando a busca do ultimo indice , se a palavra não for encontrada retorna -1, se passado um segundo parametro o javascript entende que deve começar a busca por aquele indice.
console.log(umaString.lastIndexOf('Um', 3));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
// Replace: Substitui a primeria string se existir pela segunda.
console.log(umaString.replace('Um', 'Outra'));
let frase = "O rato roeu a roupa do rei de roma.";
console.log(frase.replace(/r/g, '#'));

console.log(frase.length);// Retorna o tamanho da string(contagem dos indices);
console.log(frase.slice(2, 6));
console.log(frase.slice(-5));
console.log(frase.slice(-5, frase.length - 1));
console.log(frase.substring(frase.length - 5, frase.length - 1));

let fraseToArray = frase.split(' ', 2);

console.log(fraseToArray);
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());