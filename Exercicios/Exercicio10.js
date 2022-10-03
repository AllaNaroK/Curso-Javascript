exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
            let aPrimo = true;

            for (let divisor = 2; divisor < numero; divisor++){
                    if(numero % divisor === 0) {
                        aPrimo = false;
                        break;
                    }}if (aPrimo) console.log(numero);}}

// Devemos criar um código para classificar e mostrar somente os números primos.
// Passo 1: Criar uma variável para armazenar o valor limite desejado
// Passo 2: Criar uma função e juntamente um laço para mostrar os valores conforme o limite
// Passo 3: Criar uma segunda função para delimitar o que será um número primo falso