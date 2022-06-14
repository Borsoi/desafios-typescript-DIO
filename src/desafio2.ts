// Como podemos melhorar o esse código usando TS?

interface IPessoa {
  nome: string;
  idade: number | string;
  profissao: Profissao;
}

function validarIdade(pessoa: IPessoa, idade: string | number): IPessoa {
  if (idade === "string") {
    const idadeConvertida = Number(idade);
    const pessoaNova: IPessoa = {
      nome: pessoa.nome,
      idade: idadeConvertida,
      profissao: pessoa.profissao,
    };
    return pessoaNova;
  }
  return pessoa;
}

enum Profissao {
  Atriz = "Atriz",
  Padeiro = "Padeiro",
}

let pessoa1: IPessoa = {
  nome: "Maria",
  idade: 29,
  profissao: Profissao.Atriz,
};

console.log(pessoa1 = validarIdade(pessoa1, pessoa1.idade));

let pessoa2: IPessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};

console.log(pessoa2 = validarIdade(pessoa2, pessoa2.idade));

let pessoa3: IPessoa = {
  nome: "Laura",
  idade: "32",
  profissao: Profissao.Atriz,
};

console.log(pessoa3 = validarIdade(pessoa3, pessoa3.idade));

let pessoa4: IPessoa = {
  nome: "Carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};

console.log(pessoa4 = validarIdade(pessoa4, pessoa4.idade));
