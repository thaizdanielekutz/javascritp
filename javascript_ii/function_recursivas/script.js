// É uma função que chama ela mesma

function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

dividir(40);

//PERIGOS DAS FUNÇÕES RECURSIVAS
// primeira -> segunda -> terceira

// função sem fim

function dobrar(num) {
  console.log(num);
  dobrar(num * 2);
}

dobrar(1);

// FUNÇÃO RECURSIVA MATEMÁTICA fatorial de 5 -> !5 === 5*4*3*2*1 === 5*4!
function fatorial(num) {
  console.log(num);
}
