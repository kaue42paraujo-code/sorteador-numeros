function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt (document.getElementById("ate").value);

    if (quantidade <= de || quantidade <= ate) {
        alert("O intervalo de números é menor que a quantidade de números sorteados. Por favor, insira um intervalo maior.");
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = NumeroAleatorio(de, ate);
        

        while(sorteados.includes(numero)){
            numero = NumeroAleatorio(de, ate);
                
        }

        sorteados.push(numero);
    }

let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarBotao();
}

function NumeroAleatorio(min, max) {
      return parseInt(Math.random() * (max - min + 1) + min);
}

function alterarBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");

    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }  
}

function reiniciar() {
    resultado.innerHTML = "<label class=\"texto__paragrafo\">Números sorteados:  nenhum até agora</label>";
    quantidade.value = "";
    de.value = "";
    ate.value = "";
    alterarBotao();
}