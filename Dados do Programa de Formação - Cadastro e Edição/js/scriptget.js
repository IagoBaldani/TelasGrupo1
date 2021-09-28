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

    var app2 = new Vue({
        el: '#formulario',
        data: {
            programa:{
                "nome" : "",
                "inicio": "",
                "termino": "",
                "coordenador": 0,
                "turma": ""
            }
        },
        methods:{
            enviar(){
                this.programa.nome = 
            }
        }
    })


}


