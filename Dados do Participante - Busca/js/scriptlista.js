
function filtraDados(){
    const dadosLinhas = pegaDados();

/*     let nomeProcurado = document.querySelector("#filtro-nome").value;
    let programaProcurado = document.querySelector("#filtro-programa").value;
    let statusProcurado = document.querySelector("#filtro-status").value;
    let linhasNl = document.querySelectorAll("#participante");
    
    var linhasArray = Array.prototype.slice.call(linhasNl);

    let arrayBoolLinhas = verifica(dadosLinhas, nomeProcurado, programaProcurado, statusProcurado);
    
    mudaVisibilidade(arrayBoolLinhas, linhasArray); */
}

function pegaDados(){
    let linhas = document.querySelectorAll("#participante");
    let programas = document.querySelectorAll("#programa");

    let arrayProgramas = [];
    let arrayDadosDasLinhas = [];

    programas.forEach(programa =>{
        arrayProgramas.push(programa.textContent);
    });

    linhas.forEach(linha => {
        let dadosLinha = [];
        let nome = linha.querySelector("#info-nome").textContent;
        
        let programa = trataPrograma(linha, arrayProgramas);
        let status = trataStatus(linha);

        dadosLinha.push(nome, programa, status);
        arrayDadosDasLinhas.push(dadosLinha);
    });

    console.log(arrayDadosDasLinhas);
    return arrayDadosDasLinhas;
}

function trataStatus(linha){
    let statusTxt = linha.querySelector("#info-status").textContent;
    let status = 0; 

    if(statusTxt == "Ativo"){
        return status = 1;
    }
    else if(statusTxt == "Inativo"){
        return status = 2;
    }

    return status;
}

function trataPrograma(linha, arrayProgramas){
    var programaTxt = linha.querySelector("#info-programa").textContent;
    let programa = 0, i = 0;

    arrayProgramas.forEach(programa =>{
        if(programaTxt == programa){
            return programa;
        }
    })

    return programa;
}

function verifica(dadosLinhas, nomeProcurado, programaProcurado, statusProcurado){
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

        // Verificando se o programa procurado consta na tabela
        if(programaProcurado == dadosLinha[1] || programaProcurado == 0){
            boolLinha.push(true);
        }
        else{
            boolLinha.push(false);
        }
        
        // Verificando se o status procurado consta na tabela
        if(statusProcurado == dadosLinha[2] || statusProcurado == 0){
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
    var contador = 0;
    let aviso = document.querySelector(".aviso");
    var qtdLinhas = linhas.length;

    for(i = 0; i < linhas.length; i++){
        if(arrayBoolLinhas[i][0] && arrayBoolLinhas[i][1] && arrayBoolLinhas[i][2]){
            linhas[i].style.display = "";
        }
        else{
            linhas[i].style.display = "none";
            contador++;
        }
    }

    if(qtdLinhas == contador){
        aviso.style.display = "flex";
    }
    else{
        aviso.style.display = "none";
    }
}

function recarregaLista(){
    let linhas = document.querySelectorAll("#participante");
    let aviso = document.querySelector(".aviso");

    linhas.forEach(linha =>{
        linha.style.display = "";
    });

    aviso.style.display = "none";
}