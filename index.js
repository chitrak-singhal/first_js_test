const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const msg = document.getElementById("victory-msg");
const pScore = document.getElementById("player-score");
const cScore = document.getElementById("computer-score");
const pChoice = document.getElementById("player-choice");
const cChoice = document.getElementById("computer-choice");

let playerScore = 0;
let compScore = 0;

function compPlay(){
    let c =  Number(Math.floor(Math.random()*3)); // 0 rock 1 paper 2scissor
    if (c==0)
    {
        cChoice.textContent = "Computer: Rock";
    }
    else if (c==1)
    {
        cChoice.textContent = "Computer: Paper";
    }
    else
    {
        cChoice.textContent = "Computer: Scissor";
    }
    return c;
}

rock.addEventListener("click", function(){
    let compChoice = compPlay();
    pChoice.textContent = "Player: Rock";
    if (compChoice==0)
    {
        msg.textContent = "It's a tie!";
    }
    else if (compChoice==1)
    {
        msg.textContent = "You lose!";
        compScore++;
    }
    else
    {
        msg.textContent = "You win!";
        playerScore++;
    }
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${compScore}`;
})

paper.addEventListener("click", function(){
    let compChoice = compPlay();
    pChoice.textContent = "Player: Paper";
    if (compChoice==0)
    {
        msg.textContent = "You win!";
        playerScore++;
    }
    else if (compChoice==1)
    {        
        msg.textContent = "It's a tie!";
    }
    else
    {
        msg.textContent = "You lose!";
        compScore++;        
    }
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${compScore}`;
})

scissor.addEventListener("click", function(){
    let compChoice = compPlay();
    pChoice.textContent = "Player: Scissor";
    if (compChoice==0)
    {
        msg.textContent = "You lose!";
        compScore++;
    }
    else if (compChoice==1)
    {
        msg.textContent = "You win!";
        playerScore++;
    }
    else
    {        
        msg.textContent = "It's a tie!";
    }
    pScore.textContent = `Player: ${playerScore}`;
    cScore.textContent = `Computer: ${compScore}`;
})