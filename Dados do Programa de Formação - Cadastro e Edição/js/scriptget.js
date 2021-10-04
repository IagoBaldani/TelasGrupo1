function onLoad() {
    var app = new Vue({
        el: '#coordenadores',
        data: {
            coordenadores:[
                {
                    "id": 1,
                    "nome": "Kaiqui Lopes",
                },
                {
                    "id": 2,
                    "nome": "Luciana Neuber",
                }
            ]  
        }
        
    })
}



function main(){
    dados = salvaDados();
    carregaDados(dados);
}

function carregaDados(dados){
    let dadosExibicao = dados;
    
    dadosExibicao.inicio = formataData(dados.inicio);
    dadosExibicao.termino = formataData(dados.termino);

    var app2 = new Vue({
        el: '#programa-modal',
        data: {
            programa:{
                'nome': dadosExibicao.nome,
                'inicio': dadosExibicao.inicio,
                'termino': dadosExibicao.termino,
                'coordenador': dadosExibicao.coordenador,
                'turma': dadosExibicao.turma
            }
        }
    }) 
}

function salvaDados(){
    var dados = {
        'nome': getValueById("nome"),
        'inicio': getValueById("inicio"),
        'termino': getValueById("termino"),
        'coordenador': getValueById("coordenador"),
        'turma': getValueById("turma")
    }

    return dados;
}

function getValueById(id){
   return document.getElementById(id).value;
}

function formataData(data){
    let dataPreForm = new Date(data);
    let dataFormatada = `${dataPreForm.getDate()}/${dataPreForm.getMonth() + 1}/${dataPreForm.getFullYear()}`
    
    return dataFormatada;
}

