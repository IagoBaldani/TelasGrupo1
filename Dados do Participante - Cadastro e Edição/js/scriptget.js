function onLoad(){

    var app = new Vue({
        el: '#participante',
        data: {
            participante:{
                "status":"Ativo"
            }
        }
    })

    var app2 = new Vue({
        el: '#programas',
        data: {
            programas:[
                {   
                    "id":1,
                    "nome":"Java",
                    "turma": "Turma I 2021",
                    "coordenador": "Kaiqui Lopes",
                    "inicio": "20/07/2021",
                    "termino": "12/12/2021"
                },
                {   
                    "id": 2,
                    "nome":"Java",
                    "turma": "Turma II 2021",
                    "coordenador": "Nico Steppat",
                    "inicio": "20/07/2021",
                    "termino": "12/12/2021"
                }
            ]
        }
    })
}
