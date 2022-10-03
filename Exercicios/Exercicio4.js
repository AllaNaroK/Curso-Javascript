verificarVelocidade(86);

function verificarVelocidade(velocidade) {
    if (velocidade <= 70)
        return console.log("OK!");
    if (velocidade > 70 && Math.floor(((velocidade - 70) / 5) >= 12))
        return console.log("Carteira Suspensa!");
            else 
                return console.log("Velocidade exedida! Você ganhou: " + Math.floor((velocidade - 70) / 5) + " " + "pontos na carteira!");}

// Precisamos criar um código que possa analisar uma variável a fim de retornar o seu resultado coerente perante as opções.
// Passo 1: Criar uma variável para armazenar o nosso valor (ao caso, a velocidade a ser testada)
// Passo 2: Criar uma função para comparar os valores inseridos e retornar de forma coesa os resultados
// Obs: Para a mostragem correta dos pontos na carteira (e não ficar 5.7, por exemplo) vamos usar a função do JS Math.floor, que irá arredondar os valores.