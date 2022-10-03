const rpg = {
    titulo : 'Ordem Paranormal',
    ano : 2020,
    diretor : 'Rafael Lange',
    personagem : 'Arthur Cervero'}

exibirString(rpg);

function exibirString(objeto) {
    for (dados in objeto)
        if (typeof objeto[dados] === 'string')
            console.log(objeto[dados]);
        else if (typeof objeto[dados] === 'number')
            console.log("Não irei mostrar o número hehe")}

// Devemos criar um código para mostrar somente os valores agregados como "strings".
// Passo 1: Criar um objeto (ao caso, constante porque não iremos alterar os valores do mesmo) para receber os nossos valores a partir das variáveis
// Passo 2: Criar uma variável para armazenar este mesmo objeto
// Passo 3: Criar a função para implementarmos um laço, onde usando a função "typeof" classificará as propriedades do objeto em seus tipos literais
// Passo 4: Definir quais propriedades deverão ser exibidas
// Passo 5: Esconder os números rsrs