function abrir() {
    const menu = document.getElementById("menuLateral");
    menu.classList.add("aberto"); 
}

function fechar() {
    const menu = document.getElementById("menuLateral");
    menu.classList.remove("aberto"); 
}

function voltar() {
    window.history.back();
}