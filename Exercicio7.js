somarMultiplo(10);

function somarMultiplo(limite) {
    let a = 0;
    let b = 0;
    for (i = 0; i <= limite; i++){
        if (i % 3 === 0)
            (a += i);
        if (i % 5 === 0)
            (b += i);}

            console.log("A soma dos números múltiplos de 3 é: " + " " + (a))
            console.log("A soma dos números múltiplos de 5 é: " + " " + (b))
            console.log("A soma dos números múltiplos de 3 e 5 é: " + " " + (a+b));}

// Devemos criar um código para exibir a soma dos múltiplos de 3 e 5, a partir de um "limite".
// Passo 1: Criar uma variável para armazenar o valor "limite"
// Passo 2: Criar uma função subsequente ligada ao "limite"
// Passo 3: Criar duas variáveis (antes do loop kkk) para servirem de base para os cálculos dos múltiplos
// Passo 4: Criar um loop para classificar e os valores e subsequentemente, somar-los
// Passo 5: Mostrar os valores obtidos