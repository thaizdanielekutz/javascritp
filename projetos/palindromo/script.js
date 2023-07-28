const word = prompt("Informe uma palavra: ");
let wordinverse = "";

for (let i = word.length - 1; i >= 0; i--) {
  wordinverse += word[i];
}

if (word === wordinverse) {
  alert(word + " é um palíndromo.");
} else {
  alert(word + " não é um palíndromo.\n\n" + word + " !==" + wordinverse);
}
