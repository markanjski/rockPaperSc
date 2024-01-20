const rps = ["Rock", "Paper", "Scissors"];
var userChoice = "";
var pScore = 0;
var cScore = 0;
var roundNum = 0;

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const score = document.getElementById("score");
const buttons = document.querySelectorAll(".pick");
const btnDiv = document.querySelectorAll(".btnDiv");
const restart = document.getElementById("restart");
const rstDiv = document.querySelector(".rstDiv");

buttons.forEach((x) => x.addEventListener("click", clickFunc));
restart.addEventListener("click", rst);

function clickFunc(e) {
  playRound(Number(e.target.id[1]));
}

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playRound(player) {
  roundNum++;
  if (roundNum == 6) {    
    //
    roundNum = 1;
    (pScore = 0), (cScore = 0);
  }
  if (roundNum == 1) {
    p1.style.fontWeight = "normal";
    p1.style.color = "#e5e5e5";
  }
  let comp = getComputerChoice();
  p2.innerText = `You chose ${rps[player]} and computer chose ${rps[comp]}`;

  if (player - comp == 0) {
    p1.innerText = "It's a Tie";
  } else if (player - comp == 1 || player - comp == -2) {
    pScore++;
    p1.innerText = "You win this round";
  } else {
    p1.innerText = "Computer wins this round";
    cScore++;
  }
  score.innerText = `${pScore} : ${cScore}`;
  if (roundNum == 5) end();
}

function end() {
  p1.style.fontWeight = "bold";
  p1.style.color = "rgb(237, 111, 0)";
  if (pScore > cScore) {
    p1.innerText = "CONGRATS! YOU HAVE WON!!!";
  } else if (pScore == cScore) {
    p1.innerText = "NO WINER THIS TIME";
  } else {
    p1.innerText = "TOO BAD! COMPUTER HAVE WON :(";
  }
  
  btnDiv.forEach(element => {
    element.style.display="none";    
  });
  console.log(rstDiv.style)
  rstDiv.style.display = "block";
  
}

function rst(){
    console.log("hoho")
    location.reload();
}
