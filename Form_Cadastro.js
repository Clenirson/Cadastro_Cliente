function salvar(){
    let linktemp = document.createElement("a");
    let salvarDados = {
        "Nome":document.querySelector(".name").value,
        "Idade":document.querySelector(".idade").value,
        "CPF":document.querySelector(".cpf").value,
        "E-mail":document.querySelector(".email").value,
        "Endereço":document.querySelector(".endereço").value,
        "CEP":document.querySelector(".CEP").value,
        "Opção":document.querySelector(".opção").value
    }
    let arquivo = new Blob([JSON.stringify(salvarDados)],{type:"text/plain"}); /* variavel criada para salvar os dados em formato de arquivo*/
    linktemp.setAttribute("href",URL.createObjectURL(arquivo));
    linktemp.setAttribute("download","dados_cliente.json");
    linktemp.click();
}
function buscarCEP(){
    let cep = document.querySelector(".CEP").value;
    let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

    fetch(url).then(function(dados){
        dados.json().then(function(endereço){
            document.querySelector(".endereço").value = endereço.street;
        })
    })
}