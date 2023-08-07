let fila = [];
let opcao = "";

do {
  let paciente = "";
  for (let i = 0; i < fila.length; i++) {
    paciente += i + 1 + "º - " + fila[i] + "\n";
  }
  opcao = prompt(
    "Pacientes: \n" +
      paciente +
      "\nEscolha uma opção: \n1. Novo paciente \n2. Consultar paciente \n3. Sair"
  );
  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      //dibrar array diferente de zero
      if(pacienteConsultado){
      alert(pacienteConsultado + " foi removido da fila.");
      }else{
        alert("Não ha pacientes na fila!")
      }
      break;
    case "3":
      alert("Encerrando...");
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3");
