/**
 * Primitivos (imutáveis(Valor)) - String, Number, Boolean, Undefined, null (bigint, symbol) - Valores Copiados.
 * Referência(mutável) -  Array, Object, Function - Passados por referência (aponta para o mesmo valor na memoria se atribuido).
 */
let nome = 'Hudson';
//      0123
nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia(Copiando o valor da variavel A para a variavel B).
a = 'Outra coisa';
console.log(a,b);

let aArray = [1, 2, 3];
let bArray = aArray;
let cArray = [...aArray];
console.log(aArray,bArray);
aArray.push(4);
console.log(aArray,bArray);
bArray.pop();
console.log(aArray, bArray);
console.log(cArray);
cArray.pop();
console.log(cArray);

const aObjeto = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const bObjeto = aObjeto;
console.log(aObjeto, bObjeto);
bObjeto.nome = 'Frederico';
console.log(aObjeto, bObjeto);