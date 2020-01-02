let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let umaString = 'Um \\ \"texto\"'; 
[varA,varB,varC] = [varB,varC,varA];
console.log(umaString);

let aux = varA;
varA = varB;
varB = varC;
varC = aux;
console.log(varA,varB,varC);