document.addEventListener("DOMContentLoaded", function () {
    
    // Declarando variáveis
    const botaoAbrir = document.querySelector(".abrir-menu");
    const botaoFechar = document.querySelector(".fechar-menu");
    const menuLateral = document.getElementById("menuLateral");
    const botaoVoltar = document.getElementById("botaovoltar");

    // Aqui entram as funções que devem ser executadas no instante em que a página é carregada


    // Definindo os eventos que os botões fazem acontecer
    botaoAbrir.addEventListener("click", function () {
        menuLateral.classList.add("aberto");
    });
    botaoFechar.addEventListener("click", function () {
        menuLateral.classList.remove("aberto");
    });
    botaoVoltar.addEventListener("click", function () {
        window.history.back();
    })
});