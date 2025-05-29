document.addEventListener("DOMContentLoaded", function () {
    // Declarando variáveis
    let botaoAbrir = document.querySelector(".abrir-menu");
    let botaoFechar = document.querySelector(".fechar-menu");
    let botaoVoltar = document.getElementById("botaovoltar");
    let menuLateral = document.getElementById("menuLateral");
    let pesqres = document.querySelector(".pesqres");
    let imagem_pesquisa = document.querySelector(".imagem_pesquisa")

    // Aqui entram as funções que devem ser executadas no instante em que a página é carregado
    pesqres.innerHTML = localStorage.getItem('pesquisa');
    imagem_pesquisa.innerHTML = localStorage.getItem('imagem')


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

})

