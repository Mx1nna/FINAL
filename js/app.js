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
updateScoreOnPage(); // this shows tha value from cookies

// Page load
// Button Pressed
button0.addEventListener("click", function(){
rollAiAndPlayer(); // Roll the dice dor both player and Ai
  showRollResult();
  updateScoreOnPage();    // show the updated scores
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
  playerRollText.innerHTML=playerRollValue; // shows players roll
  aiRollText.innerHTML=aiRollValue; // shows Ai roll

}
function updateScoreOnPage(){
  playerScoreText.innerHTML=playerScore;// Update
  aiScoreText.innerHTML=aiScore; // Update AI score in the HTML
}
  function compareRolls() {
    if (playerRollValue > aiRollValue) {
      playerScore++;//player wins this round
      resultText.innerHTML = "Player Wins!!";
    }
    else if (aiRollValue > playerRollValue){
      aiScore++;// Ai wins this round
      resultText.innerHTML = "Ai Wins!!";
    }
    else{
      resultText.innerHTML = "It's a draw!";
    }
  }

  function saveGame(){
  document.cookie= "playerScore="+ playerScore + ";expires=MON,13 DEC 2025 12:00:00 UTC";
    document.cookie= "aiScore="+ aiScore +";expires=MON,13 DEC 2025 12:00:00 UTC";
  }
function tryLoadGame(){
  playerScore = getCookie("playerScore");
aiScore = getCookie("aiScore");
}
// cookie name
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);  // Decode cookies to handle special characters
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);  // Return the cookie value
    }
  }
  return 0;  // Return 0 if cookie is not found
}

