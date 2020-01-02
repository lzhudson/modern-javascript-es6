const num = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML += num;
texto.innerHTML = `
<p>Raiz quadrada ${num ** 0.5}</p>
<p>${num} é inteiro: ${Number.isInteger(num)}</p>
<p>É NaN:${Number.isNaN(num)}</p>
<p>Arredondando para baixo: ${Math.floor(num)}</p>
<p>Arredondando para cima: ${Math.ceil(num)}</p>
<p>Com duas casas decimais: ${num.toFixed(2)}</p>
`;
