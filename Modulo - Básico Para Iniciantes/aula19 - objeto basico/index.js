/* const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Holanda',
    idade: 19
};
const pessoa2 = {
    nome:'Maria',
    sobrenome: 'Oliveira',
    idade: 55,
}
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade); */
function criaPessoa(nome, sobrenome, idade){
    return { 
        nome, 
        sobrenome, 
        idade,
        fala(){
            console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
            console.log(`A minha idade atual é ${this.idade}`);
        },
        incrementaIdade(){
            ++this.idade;
        }
    }
};
// Parametro está contido na criação da função e argumento é o que é passado para a função.

const pessoa1 = criaPessoa('Luiz', 'Hudson', 19);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 23);
const pessoa3 = criaPessoa('João', 'Moreira', 33);
const pessoa4 = criaPessoa('Junior', 'Fernandes', 29);
const pessoa5 = criaPessoa('João', 'Otávio', 69);
console.log(pessoa1);
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
