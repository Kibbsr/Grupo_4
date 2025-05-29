document.addEventListener("DOMContentLoaded", function () {

    // Declarando variáveis
    let botaoAbrir = document.querySelector(".abrir-menu");
    let botaoFechar = document.querySelector(".fechar-menu");
    let menuLateral = document.getElementById("menuLateral");
    let botaoIr = document.getElementById("botaoir");
    let input = document.querySelector('input');

    // Aqui entram as funções que devem ser executadas no instante em que a página é carregada


    
    // Definindo os eventos que os botões fazem acontecer
    botaoAbrir.addEventListener("click", function () {
        menuLateral.classList.add("aberto");
    })
    botaoFechar.addEventListener("click", function () {
        menuLateral.classList.remove("aberto")
    })
    botaoIr.addEventListener("click", function () {

        if (document.querySelector('input').value == "") {
            alert("A caixa de pesquisa está vazia!")
        }
        else {
            localStorage.setItem("pesquisa", document.getElementById('pesquisa').value)
            window.location.href = "Resultado-Pesquisa.html"
        }
    })
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.querySelector("#botaoir").click();
        }
    })
})