let fila = [];
let opcao = "";

do {
  let professor = "";
  for (let i = 0; i < fila.length; i++) {
    professor += i + 1 + "º- " + fila[i] + "\n";
  }

  opcao = prompt(
    "Professores que pediram cópias: \n" +
      professor +
      "\n Selecione uma opção:\n1. Adicionar professor a lista de espera \n2. Remover professor da lista de espera \n3. Sair"
  );

  switch (opcao) {
    case "1":
      const nomeProfessor = prompt("Qual é o nome do professor? ");
      fila.push(nomeProfessor);
      const numeroDeCopias = Number(prompt("Qual é o número de cópias? "));
      alert(
        "O(A) professor(a) " +
          nomeProfessor +
          " pediu: " +
          numeroDeCopias +
          " para impressão."
      );
      break;
    case "2":
      const professorRemovido = fila.shift();
      alert(professorRemovido + " foi removido da fila.");
      break;
    case "3":
      alert("Encerrando...");
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3");
