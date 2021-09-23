function buscar(){
    let filtroNome = document.querySelector("#filtro-nome");
    let filtroStatus = document.querySelector("#filtro-status");
    
    let valorFiltroNome = filtroNome.value;
    var programas = document.querySelectorAll(".programa");

    if(filtroNome.value.length > 0) {
        for (var i = 0; i < programas.length; i++){
            let programa = programas[i];
            let nomeTxt = programa.querySelector("#info-nome").textContent;

            let expressao = new RegExp(valorFiltroNome,"i");
            if(!expressao.test(nomeTxt)){
                programa.classList.add("invisivel");
            }else{
                programa.classList.remove("invisivel");
            }
        }
    }
    else{
        for (var i = 0; i < programas.length; i++){
            let programa = programas[i];
             programa.classList.remove("invisivel");
        }

    }

}