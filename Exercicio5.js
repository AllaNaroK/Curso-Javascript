exibirTipo(10);

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
            console.log(i + " " + "PAR");
        else
            console.log(i + " " + "ÍMPAR");
    }
    }

// Precisamos criar uma função 
// Passo 1: Criar uma variável para armazenar o valor (ao caso, a quantidade de números que serão mostrados na tela)
// Passo 2: Criar a função para armazenar e mostrar os valores inseridos (além de dizer a qual classe pertencem)
// Obs: Criei o if e o else com "return" dentro deles, mas, acabava por exibir somente o primeiro valor!