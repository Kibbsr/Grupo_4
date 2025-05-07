document.addEventListener("DOMContentLoaded", function() {
    // Aqui entram as funções que devem ser executadas no instante em que a página é carregada

    // Declaração dos botões
    const botaoAbrir = document.querySelector(".abrir-menu");
    const botaoFechar = document.querySelector(".fechar-menu");
    const menuLateral = document.getElementById("menuLateral");
    const botaoVoltar = document.getElementById("botaovoltar");
    const botaoIr = document.getElementById("botaoir");

    // Definindo os eventos que os botões fazem acontecer
    botaoAbrir.addEventListener("click", function() {
        menuLateral.classList.add("aberto");
    });
    botaoFechar.addEventListener("click", function() {
        menuLateral.classList.remove("aberto");
    });
    botaoVoltar.addEventListener("click", function() {
        window.history.back();
    })

    // lembrar de trocar o "a" da pagina inicial para um button, assim conseguimos guardar o valor do input e transferir para a próxima página
    botaoIr.addEventListener("click", function(){
        localStorage.setItem("pesquisa", )
        window.location.href = "Resultado-Pesquisa.html"
    })
});