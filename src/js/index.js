const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");


btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    escondercartaoselecionado();

    cartaoAtual++;
    mostrarcartao();
});


btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0
    if(ehPrimeiroCartao) return;

    escondercartaoselecionado();
    
    cartaoAtual--;
    mostrarcartao();
    cartoes[cartaoAtual].classList.add("selecionado");


});


function mostrarcartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function escondercartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

