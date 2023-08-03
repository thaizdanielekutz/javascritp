let fila = [];
let opcao = "";

do {
  let listaProfessores = "";
  for (let i = 0; i < fila.length; i += 2) {
    const nomeProfessor = fila[i];
    const numeroDeCopias = fila[i + 1];
    listaProfessores +=
      i / 2 + 1 + "º- " + nomeProfessor + " (" + numeroDeCopias + " cópias)\n";
  }

  opcao = prompt(
    "Professores que pediram cópias: \n" +
      listaProfessores +
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
      fila.push(numeroDeCopias);
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
