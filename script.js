//pegando componentes em tela e armazenando em variáveis
var botaoMenu = document.querySelector('#botaoMenu');
var menuLateral = document.querySelector('#menu-lateral-id');
var fundoMenu = document.querySelector('#fundo-menu-id');
var linksMenu = document.querySelectorAll(".lista-menu a");

//função executa uma ação
function abrirFecharMenu(){
    menuLateral.classList.toggle("aberto");
    fundoMenu.classList.toggle("visivel");
}

botaoMenu.addEventListener("click", abrirFecharMenu);
fundoMenu.addEventListener("click", abrirFecharMenu);

linksMenu.forEach(function(links){
    links.addEventListener("click", abrirFecharMenu);
});
