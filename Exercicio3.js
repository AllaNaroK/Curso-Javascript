const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){
    if (entrada %3 === 0 && entrada %5 === 0)
        return console.log("É FizzBuzz!");
    if (entrada %3 === 0)
        return console.log("É Fizz!");
    if (entrada %5 === 0)
        return console.log("É Buzz!");
    if (typeof entrada !== 'number')
        return console.log("Não é um número!")
    return console.log("Este número não é divisível por 3 ou 5! Então... : ",entrada);
}

//Para termos os resultados que necessitamos, precisamos tratar o código para cada caso.
//Passo 1: Criar uma variável para armazenar o nosso resultado (e mostrar no console)
//Passo 2: Criar uma função para comparar os resultados
//Passo 3: A partir do resultado, usar da variável criada para exibir o resultado corretamente (entre as cinco opções lógicas)