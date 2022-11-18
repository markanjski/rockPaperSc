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
    console.log(`You chose ${player}, computer chose ${comp}`);
    playerNum = (player[0] == "R") ? 1 : ((player[0] == "P") ? 2 : 3);
    compNum = (comp[0] == "R") ? 1 : ((comp[0] == "P") ? 2 : 3);
    console.log(playerNum, compNum);

    if (playerNum - compNum == 0) {
        console.log("It's a Tie");
        return 0;
    } else if (playerNum - compNum == 1 || playerNum - compNum == -2) {
        console.log("Congrats! You win");
        return 1;
    } else console.log("Too bad. Computer win");
    return 2;
}

function game() { //BEST OF FIVE
    console.log("\n * * * NEW GAME * * *");
    let scorePlayer = 0,
        scoreComp = 0;
    for (let i = 0; i < 5; i++) {
        console.log(`--> round ${i+1}`);
        let round = playRound();
        switch (round) {
            case 1:
                scorePlayer++;
                break;
            case 2:
                scoreComp++;
                break;
            default:
                break;
        }
        console.log(`Current score: \nPlayer ${scorePlayer} : ${scoreComp} Computer\n\n`);
    }
    switch (true) {
        case scorePlayer > scoreComp:
            console.log(">>>>YOU HAVE WON!!!")
            break;

        case scoreComp > scorePlayer:
            console.log(">>>>Computer have won!")
            break;
        case scoreComp == scorePlayer:
            console.log(">>>>TIE!")
            break;

    }
    console.log(scorePlayer, scoreComp);

}

game();