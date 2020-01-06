Com o var podemos ter duas variáveis com o mesmo no como no exemplo abaixo:
var nome = 'Hudson';
var nome = 'João';
O que acontece é que a segunda variável sobrepõe a segunda ou seja o valor da variavel nome passsa a ser "João", porém o JavaScript não retorna nenhum erro referente a isso, porém quando utilizamos o let como no exemplo abaixo, o JavaScript nos mostra um erro que diz que não podemos ter outra variavel com o mesmo nome.
let nome = 'Hudson';
let sobrenome = 'João';
