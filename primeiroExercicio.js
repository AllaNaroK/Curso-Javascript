let a = 'celta';
let b = 'monark';
let c;

c = b;
b = a;
a = c;

console.log('Primeiro Valor:',a);
console.log('Segundo Valor:',b);

// Parcialmente, precisamos de uma terceira variável para poder guardar o valor de uma. Seguindo os passos:
// Passo 1: Armazenar o valor de uma variável na terceira.
// Passo 2: Inverter o valor da variável que não foi mudada.
// Passo 3: Chamar a variável que teve seu valor armazenado. 