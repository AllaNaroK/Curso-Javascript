function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosDaniel = ['Alysson','Allan','Guilherme','Lucas','Luciano','Ricardo']
    if (ConvidadosDaniel.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'} 
    else {document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'}}