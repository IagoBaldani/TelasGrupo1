function onLoad(){

    var app = new Vue({
        el: '#programas',
        data: {
            programas : [
                {
                    "id":1,
                    "nome":"Java",
                    "turma":"Turma I 2020",
                    "status": "Encerrado"
                },
                {
                    "id":2,
                    "nome":"BI",
                    "turma":"Turma I 2021",
                    "status": "Em andamento"
                },
                {
                    "id":3,
                    "nome":"Mainframe",
                    "turma":"Turma I 2021",
                    "status": "Em andamento"
                }]
        }
    })
}
