let fila = [];
let opcao = "";

do {
  let professor = "";
  for (let i = 0; i < fila.length; i++) {
    professor += i + 1 + "º- " + fila[i] + "\n";
  }

  opcao = prompt(
    "Professores que pediram cópias \n Selecione uma opção:\n 1. Adicionar professor a lista de espera \n2.Remover professor da lista de espera \n3. Sair"
  );

  switch (opcao) {
    case "1":
  }
} while (opcao !== "3");
