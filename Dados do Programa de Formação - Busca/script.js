var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    console.log(this.value);
    var instrutores = document.querySelectorAll(".instrutor");

    if (this.value.length > 0) {
        for (var i = 0; i < instrutores.length; i++){
            var instrutor = instrutores[i];
            var tdNome = instrutor.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i");

            if(!expressao.test(nome)){
                instrutor.classList.add("invisivel");
            }else{
                instrutor.classList.remove("invisivel");
            }
        }
    }
    else{
        for (var i = 0; i < instrutores.length; i++){
             var instrutor = instrutores[i];
             instrutor.classList.remove("invisivel");
        }

    }

});