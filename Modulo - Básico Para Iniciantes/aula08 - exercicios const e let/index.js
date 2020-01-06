const nome = 'Luiz Hudson';
const sobrenome = 'Evangelista Holanda';
const idade = 19;
const peso = 70;
const alturaEmM = 1.78;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento; // ano atual - idade
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, ' + 'pesa ' + peso + ' kg tem ' + alturaEmM + ' de altura e seu IMC é ' + indiceMassaCorporal + '.');
console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento + '.');

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é ${indiceMassaCorporal}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`)