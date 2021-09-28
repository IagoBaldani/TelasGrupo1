function onLoad() {

    var app = new Vue({
        el: '#programa',
        data: {
            programa: {
                "nome": "Java",
                "inicio": "20/07/2021",
                "fim": "12/12/2021",
                "coordenador": "Kaiqui Lopes",
                "turma": "Turma I 2021",
                "status": "Em andamento"
            }    
        }
    })

    var app2 = new Vue({
        el:'#programa-modal',
        data: {
            programa:{
                "nome":"Java",
                "turma": "Turma I 2021"
            }
        }
    })
}
