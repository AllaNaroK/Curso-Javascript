
function endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep}

const endereco1 = new endereco ('Benemérito Paulo Tavares','Mafra','89302328');
const endereco2 = new endereco ('Benemérito Paulo Tavares','Mafra','89302328');

function aIguais(endereco1,endereco2) {
    return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep == endereco2.cep}   
    console.log(aIguais(endereco1,endereco2));

function aCompararMemoria(endereco1,endereco2){
    return endereco1 === endereco2;}
    console.log(aCompararMemoria(endereco1,endereco2));

// Devemos criar um algoritmo para comparar objetos a partir de funções.
// Passo 1: Criar um objeto para armazenar os dados sobre os endereços
// Passo 2: Criar duas variáveis para obter os valores dos seus endereços subsequentes
// Passo 3: Criar uma função para comparar se os endereços são iguais (informações)
// Passo 4: Criar uma segunda função para comparar se os endereços tem o mesmo local na memória