const choiceArr = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choiceArr[choice];
}

function playerChoice() {
    let a = "";
    while (!choiceArr.includes(a)) {
        a = prompt("Pick Rock, Paper or Scissors");
        a = a[0].toLocaleUpperCase() + a.slice(1).toLocaleLowerCase();
    }
    return a;
}

function playRound(player, comp) {
    console.log(player, comp);
    playerNum = player[0] == "r" ? 1 : (player[0] == "p" ? 2 : 3);
    compNum = comp[0] == "r" ? 1 : (comp[0] == "p" ? 2 : 3);
    console.log(playerNum, compNum);
}




playRound("rock", "asdf");

for (let i = 0; i < 20; i++) {

    //playRound("Paper", getComputerChoice());
}