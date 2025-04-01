document.getElementById('PLAY').addEventListener('click', function() {
  let age;
  do {
    age = Number(prompt("Informe a sua idade: "));
    if (isNaN(age) || age <= 0) {
      alert("Por favor, informe uma idade válida!");
    }
  } while (isNaN(age) || age <= 0);

  if (age >= 18) {
    alert("Você está autorizado a jogar!");

    let jogarNovamente;
    do {
      let PlayerChoice = Number(prompt("Escolha a sua jogada! 1 - Pedra; 2 - Tesoura; 3 - Papel"));
      let CPUChoice = Math.floor(Math.random() * 3) + 1;

      if (PlayerChoice === CPUChoice) {
        alert("EMPATE!");
      } 
      else if (PlayerChoice === 1) { // Jogador escolheu Pedra
        if (CPUChoice === 2) {
          alert("A SKYNET escolheu Tesoura. Vitória da Humanidade!");
        }
        else if (CPUChoice === 3) {
          alert("A SKYNET escolheu Papel. Vitória das Máquinas!");
        }
      } 
      else if (PlayerChoice === 2) { // Jogador escolheu Tesoura
        if (CPUChoice === 1) {
          alert("A SKYNET escolheu Pedra. Vitória das Máquinas!");
        }
        else if (CPUChoice === 3) {
          alert("A SKYNET escolheu Papel. Vitória da Humanidade!");
        }
      } 
      else if (PlayerChoice === 3) { // Jogador escolheu Papel
        if (CPUChoice === 1) {
          alert("A SKYNET escolheu Pedra. Vitória da Humanidade!");
        }
        else if (CPUChoice === 2) {
          alert("A SKYNET escolheu Tesoura. Vitória das Máquinas!");
        }
      } 
      else {
        alert("Escolha inválida! Digite 1, 2 ou 3.");
        continue; 
      }

      jogarNovamente = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
    } while (jogarNovamente === "s");

  } else {
    alert("Você deve ser maior de 18 anos para jogar!");
    location.reload(); 
  }
});