function aFaixaPreco(tooltip,min,max){
    return{tooltip, min, max}}

let faixa = [
    aFaixaPreco('até R$850',0,850),
    aFaixaPreco('de R$850 até R$1500',850,1500),
    aFaixaPreco('R$1500 ou mais',1500,1000000),]

console.log(faixa);
    
// Devemos criar um algoritmo que simule algumas faixas de preço (predefinições)
// Passo 1: Criar uma função para armazenar as condições necessárias
// Passo 2: Criar um array para juntar as funcionalidades com as informações
// Passo 3: Mostrar as informações na tela