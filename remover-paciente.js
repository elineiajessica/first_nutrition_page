var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 1000); //1000 milisegundos, sendo representado então por 1s.
});

//pacientes.forEach(function(paciente){
//  paciente.addEventListener("dblclick", function (){
//        console.log("fui clicado com duplo clique!");
//        this.remove(".paciente"); // dessa forma removeria a linha já criada, mas não removeria em caso de novos itens
// adicionados com o formulário. Acima tem o código com o jeitinho de bolha, clicando no pai e reverberando nos filhos. O target 
// possibilita que seja demarcado em qual filho será aplicado o parâmetro. 
//    });
//
//});
