"use strict";
// Como podemos melhorar o esse código usando TS?
function validarIdade(pessoa, idade) {
    if (idade === "string") {
        const idadeConvertida = Number(idade);
        const pessoaNova = {
            nome: pessoa.nome,
            idade: idadeConvertida,
            profissao: pessoa.profissao,
        };
        return pessoaNova;
    }
    return pessoa;
}
var Profissao;
(function (Profissao) {
    Profissao["Atriz"] = "Atriz";
    Profissao["Padeiro"] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz,
};
console.log(pessoa1 = validarIdade(pessoa1, pessoa1.idade));
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
};
console.log(pessoa2 = validarIdade(pessoa2, pessoa2.idade));
let pessoa3 = {
    nome: "Laura",
    idade: "32",
    profissao: Profissao.Atriz,
};
console.log(pessoa3 = validarIdade(pessoa3, pessoa3.idade));
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
};
console.log(pessoa4 = validarIdade(pessoa4, pessoa4.idade));
