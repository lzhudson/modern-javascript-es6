function saudacao(nome){
    return `Bom dia ${nome}!`;
}
function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}
const raiz = function(n){
    return n ** 0.5;
};
const metade = n => n / 2;

console.log('Raiz:',raiz(9));
console.log('Raiz:',raiz(16));
console.log('Raiz:',raiz(25));
console.log('Metade de 10:', metade(10));
const resultado = soma(2,2);
const somaResultado = soma();
console.log(somaResultado);
const variavel = saudacao('Luiz');
console.log(soma(2,2));
console.log(soma(5, 10));
console.log(variavel);
// saudacao('Maria');
// saudacao('Felipe');