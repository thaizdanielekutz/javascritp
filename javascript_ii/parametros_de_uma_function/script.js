function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

//dobro(5);

function dizerOla(nome = "Mundo") {
  alert("Olá, " + nome + " !");
}

//dizerOla("Thaiz");

//Para passar mais um parâmetro temos que adicionar mais uma vírgula

function soma(a, b, c) {
  alert("O resultado da soma é " + (a + b + c));
}

//soma(7, 6,0);
//soma(1, 1,3);

//DETALHES
//quando temos mais de um parâmetro a ordem importa, nesse caso abaixo abreviações aconteceram

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome, //mesmo que nome
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

criarUsuario("Thaiz", "thaiz@email.com", "1234");
criarUsuario("thaiz@gmail.com", "Thaiz ", "1234");

//Função com dado padrão - tipo = "admin" sempre no final
function novoUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, //mesmo que nome
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

novoUsuario("Thaiz", "admin", "thaiz@gmail.com", "1234");

//DICA
function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  //...
}
muitosParametros(
  "nome",
  "telefone",
  "endereço",
  "aniversario",
  "email",
  "senha"
);

function objetoCOmoParametro(usuario) {
  // ...
  usuario.nome;
  usuario.email;
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha)

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email:"",
  senha:"",
  endereco:"",
  aniversario: ""
}

objetoCOmoParametro(dadosDoUsuario)
