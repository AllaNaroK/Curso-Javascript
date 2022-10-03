const array = [70,70,80];
console.log(mediaAluno(array));

function mediaAluno(notas){
    let media = calcularMedia(notas);
    if (media <= 59) 
        return console.log("Infelizmente sua nota é: F");
    if (media <= 69) 
        return console.log("A nota é: D");
    if (media <= 79) 
        return console.log("A nota é: C");
    if (media <= 89) 
        return console.log("A nota é: B");
    else
        return console.log("Parabéns, sua nota é: A");}

function calcularMedia(array){
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);}

    // Precisamos criar um código para a classificação de nota final perante a média das notas obtidas.
    // Passo 1: Criar uma variável para armazenar o valor do array (média).
    // Passo 2: Criar uma função para calcularmos e classificarmos coerentemente em qual caso a média irá ficar.
    // Passo 3: Criar uma segunda função com um "loop" para calcularmos quanto será a média.
    // Passo 4: Exibir em qual caso perante as notas no array estará o aluno. 