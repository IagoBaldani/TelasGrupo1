function onLoad(){

    var vmParticipantes = new Vue({
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

    var vmProgramas = new Vue({
        el: '#filtro-programa',
        data:{
            programas: [
                {
                    'id':1,
                    'nome': 'Java'
                },
                {
                    'id':2,
                    'nome': 'Mainframe'
                },
                {
                    'id':3,
                    'nome': '.net'
                }
            ] 
        }     
    })
}
