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

function playRound() {
    let player = playerChoice();
    let comp = getComputerChoice();
    console.log(player, comp);


    playerNum = (player[0] == "R") ? 1 : ((player[0] == "P") ? 2 : 3);
    compNum = (comp[0] == "R") ? 1 : ((comp[0] == "P") ? 2 : 3);
    console.log(playerNum, compNum);

    if (playerNum - compNum == 0) {
        console.log("Tie");
        return 0;
    } else if (playerNum - compNum == 1 || playerNum - compNum == -2) {
        console.log("u won");
        return 1;
    } else console.log("comp won")
    return 2;
}





for (let i = 0; i < 20; i++) {
    console.table(getComputerChoice());
}