function onLoad() {

    var app = new Vue({
        el: '#participante',
        data: {
            participante: {
                "id": 1,
                "nome": "Miguel Felisberto",
                "contato": "(14)99999-9999",
                "fonteRecrutamento": "Palestra via faculdade",
                "notaProvaLogica": "10",
                "urlDisc": "google.com.br",
                "instituicaoEnsino": "Fatec Ourinhos",
                "curso": "Análise e Desenvolvimento de Sistemas",
                "urlTce": "google.com.br",
                "terminoGraduacao": "20/12/2021",
                "cargo": "Estagiário",
                "status":"Ativo",
                programaDeFormacao: {
                    "nome": "Java",
                    "turma": "Turma I 2021",
                    "coordenador": "Kaiqui Lopes",
                    "inicio": "20/07/2021",
                    "fim": "12/12/2021"
                },
                "observacao": ""
            }
        }
    })

    var app2 = new Vue({
        el:'#participante-modal',
        data: {
            participante:{
                "nome":"Miguel Felisberto"
            }
        }
    })
}
