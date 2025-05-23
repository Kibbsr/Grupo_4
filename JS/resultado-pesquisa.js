document.addEventListener("DOMContentLoaded", function () {
    // Declarando variáveis
    const botaoAbrir = document.querySelector(".abrir-menu");
    const botaoFechar = document.querySelector(".fechar-menu");
    const botaoVoltar = document.getElementById("botaovoltar");
    const menuLateral = document.getElementById("menuLateral");
    const pesqres = document.querySelector(".pesqres");
    const imagem_pesquisa = document.querySelector(".imagem_pesquisa")

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

