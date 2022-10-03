let endereco = {
    Rua: 'Benemérito Paulo Tavares',
    Cidade: 'Mafra',
    Cep: '89302328'};

    function mostrarEndereco(endereco){
        for (let dados in endereco)
            console.log(dados,endereco[dados]);}
    mostrarEndereco(endereco);

// Devemos criar um template de endereço funcional.
// Passo 1: Criar um objeto para armazenar as informações (sobre o endereço)
// Passo 2: Criar uma função para mostrar em "loop" todos os dados criados