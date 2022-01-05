function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: 'Renan',
  idade: 28,
};

console.log(calculaIdade.call(pessoa1, 3));
console.log(calculaIdade.apply(pessoa1, [4]));
