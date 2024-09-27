//Button
const button0= document.getElementById("button0");

//TEXT
const playerRollText=document.getElementById("playerRollText");
const aiRollText=document.getElementById("aiRollText");
// Variable
let playerRollValue=0;
let aiRollValue=0;

// Page load
// Button Pressed
button0.addEventListener("click", function(){
rollAiAndPlayer();
showRollResult();
});

// Controllers
function rollAiAndPlayer(){
playerRollValue = getRandomNumberInt();
aiRollValue = getRandomNumberInt();
}

function getRandomNumberInt() {
  return Math.floor(Math.random() * 6) + 1;
}
// View
function showRollResult(){
  playerRollText.innerHTML=playerRollValue;
  aiRollText.innerHTML=aiRollValue;
}
