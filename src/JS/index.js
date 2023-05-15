const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro")
body.classList.toggle("modo-escuro")

    if (modoEscuroAtivo) {
       // body.classList.remove("modo-escuro") .TOGGLE ALTERNA NAO PRECISA DISSO
        imagemBotaoTrocaDeTema.setAttribute("src", "../imagens/sun.png")
    } else {
       // body.classList.add("modo-escuro")
        imagemBotaoTrocaDeTema.setAttribute("src", "../imagens/moon.png")
    } });


