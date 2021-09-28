function onLoad() {

    var app = new Vue({
        el: '#instrutor',
        data: {
            instrutor: {
                "id": 1,
                "nome": "Kaiqui Lopes",
                "contato": "(11)99999-9999",
                "cpf": "222.222.222-22",
                "email": "kaiquilopes@sisconsultoria.com.br"
                
            }
        }
    })

    var app2 = new Vue({
        el:'#instrutor-modal',
        data: {
            instrutor:{
                "nome":"Kaiqui Lopes"
            }
        }
    })
}