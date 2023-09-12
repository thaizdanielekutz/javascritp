// Métodos são funções atreladas a objetos
let pessoa = {
  nome: "Thaiz",
  idade: 22,
  dizerOla() {
    console.log(
      this.nome +
        " , diga olá! Agora que falou olá, fale sua idade!" +
        this.idade
    );
  },
};

console.log(pessoa);
pessoa.dizerOla();
