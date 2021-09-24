
function filtraDados(){
    const dadosLinhas = pegaDados();

    let nomeProcurado = document.querySelector("#filtro-nome").value;
    let statusProcurado = document.querySelector("#filtro-status").value;
    let linhas = document.querySelectorAll(".programa");

    let arrayBoolLinhas = verifica(dadosLinhas, nomeProcurado, statusProcurado);

    mudaVisibilidade(arrayBoolLinhas, linhas);
}

function pegaDados(){
    let linhas = document.querySelectorAll(".programa");
    let arrayDadosDasLinhas = [];

    linhas.forEach( linha => {
        let dadosLinha = [];
        let nome = linha.querySelector("#info-nome").textContent;
        let status = trataStatus(linha);

        dadosLinha.push(nome, status);
        arrayDadosDasLinhas.push(dadosLinha);
    });

    return arrayDadosDasLinhas;
}

function trataStatus(item){
    let statusTxt = item.querySelector("#info-status").textContent;
    let status = 0; 

    if(statusTxt == "Em andamento"){
        return status = 1;
    }
    else if(statusTxt == "Encerrado"){
        return status = 2;
    }

    return status;
}

function verifica(dadosLinhas, nomeProcurado, statusProcurado){
    let arrayBoolLinhas = []; 
    let expressao = new RegExp(nomeProcurado,"i");

    dadosLinhas.forEach(dadosLinha => {
        let boolLinha = [];
        
        // Verificando se o nome procurado consta na tabela
        if(expressao.test(dadosLinha[0]) || nomeProcurado == ""){
            boolLinha.push(true);
        }
        else{
            boolLinha.push(false);
        }

        // Verificando se o status procurado consta na tabela
        if(statusProcurado == dadosLinha[1] || statusProcurado == 0){
            boolLinha.push(true);
        }
        else{
            boolLinha.push(false);
        }

        arrayBoolLinhas.push(boolLinha);
    });

    return arrayBoolLinhas;
}

function mudaVisibilidade(arrayBoolLinhas, linhas){
    let i; 

    for(i = 0; i < linhas.length; i++){
        if(arrayBoolLinhas[i][0] && arrayBoolLinhas[i][1]){
            linhas[i].style.display = "";
        }
        else{
            linhas[i].style.display = "none";
        }
    }

}