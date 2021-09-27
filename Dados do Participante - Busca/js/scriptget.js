function onLoad(){

    var app = new Vue({
        el: '#participantes',
        data: {
            participantes : [
                {
                    "id":1,
                    "nome":"Kaiqui Lopes",
                    "programa": "Java",
                    "status": "Ativo"
                },
                {
                    "id":2,
                    "nome":"Iago Baldani",
                    "programa": "Java",
                    "status": "Ativo"
                },
                {
                    "id":3,
                    "nome":"Leticia Angulo",
                    "programa": "Mainframe",
                    "status": "Ativo"
                },
                {
                    "id":4,
                    "nome":"Geovanni Santos",
                    "programa": ".net",
                    "status": "Inativo"
                },
                {
                    "id":5,
                    "nome":"Pedro Xavier",
                    "programa": "Mainframe",
                    "status": "Inativo"
                },
            ]
        }
    })
}
