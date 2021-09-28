function onLoad(){

    var app = new Vue({
        el: '#instrutores',
        data: {
            instrutores : [
                {
                    "id":1,
                    "nome":"Kaiqui Lopes",
                    "status": "Ativo"
                },
                {
                    "id":2,
                    "nome":"Luciana Neuber",
                    "status": "Ativo"
                },
                {
                    "id":3,
                    "nome":"Kaiqui Lopes",
                    "status": "Ativo"
                },
                {
                    "id":4,
                    "nome":"Luciana Neuber",
                    "status": "Inativo"
                },
                {
                    "id":5,
                    "nome":"Kaiqui Lopes",
                    "status": "Inativo"
                },
            ]
        }
    })
}