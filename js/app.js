//Button
const button0= document.getElementById("button0");

//TEXT
let playerRollText=document.getElementById("playerRollText");
let aiRollText=document.getElementById("aiRollText");
let resultText= document.getElementById("resultText");
let playerScoreText=document.getElementById("playerScoreText");
let aiScoreText=document.getElementById("aiScoreText");


// Variable
let playerRollValue=0;
let aiRollValue=0;
let playerScore=0;// Player score variable
let aiScore=0; // Ai score variable



//Cookies Data
tryLoadGame();
showRollResult();

// Page load
// Button Pressed
button0.addEventListener("click", function(){
rollAiAndPlayer();
  showRollResult();     // Then display the rolls
  showPlayerScoreResult(); // show the updated score
  showAIScoreResult();    // show the updated scores
  compareRolls();       // Compare the rolls first
  saveGame();
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
function showPlayerScoreResult(){
  playerScoreText.innerHTML=playerScore;// Update player score in the HTML
}
function showAIScoreResult(){
  aiScoreText.innerHTML=aiScore; // Update AI score in the HTML
}
  function compareRolls() {
    if (playerRollValue < aiRollValue) {
      playerScore++;//player wins this round
      resultText.innerText = ("Player Wins!!");
    }
    else if (aiRollValue < playerRollValue){
      aiScore++;// Ai wins this round
      resultText.innerText = ("Ai Wins!!");
    }
    else{
      resultText.innerText = ("It's a draw!");
    }
  }

  function saveGame(){
  document.cookie= ("playerScore="+playerScore+ ";expires=MON,13 DEC 2025 12:00:00 UCT");
    document.cookie= ("aiScore="+aiScore+";expires=MON,13 DEC 2025 12:00:00 UCT");
  }
function tryLoadGame(){
  playerScore = getCookie("playerScore");
aiScore = getCookie("aiScore");
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
