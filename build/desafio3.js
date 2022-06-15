"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = (document.getElementById("soma"));
let campoSaldo = document.getElementById("campo-saldo");
let resultadoSoma = 0;
if (campoSaldo) {
    campoSaldo.innerHTML = String(0);
}
function somarAoSaldo(somaValor) {
    if (campoSaldo) {
        const campoSaldoNumero = Number(campoSaldo.innerHTML);
        resultadoSoma = campoSaldoNumero + somaValor;
        campoSaldo.innerHTML = resultadoSoma.toString();
    }
}
function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = "";
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
