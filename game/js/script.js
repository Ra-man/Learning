
let scorePlayer = 0;
let scoreComputer =0;
let choicePlayer = 0;
let choiceComputer = 0;
let buttons = document.querySelectorAll('button');
let resultMatch = document.querySelector('#resultMatch');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

const myArray = [
    'rock',
    'paper',
    'scissors'
];

function computerPlay() {
  return myArray[~~(Math.random()*myArray.length)]
}

function game(){
     if (scoreComputer === 3){
        resultMatch.innerHTML = "The computer won by " + scorePlayer + " - " + scoreComputer;
        
        scoreComputer = 0;
        scorePlayer =0;

        playerScore.innerHTML = "The player score is : "+ scorePlayer;
        computerScore.innerHTML = "The computer score is : "+ scoreComputer;
    }
     if (scorePlayer === 3){
        resultMatch.innerHTML = "The player won by " + scorePlayer + " - " + scoreComputer;
        
        scoreComputer = 0;
        scorePlayer =0;

        playerScore.innerHTML = "The player score is : "+ scorePlayer;
        computerScore.innerHTML = "The computer score is : "+ scoreComputer;
    }   
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        onUserChoice(button.id);
        game();
    });
});

 function onUserChoice(choice){
    choiceComputer = computerPlay();
    choicePlayer = choice;
    console.log(playRound(choiceComputer,choicePlayer));
} 
function playRound(choiceComputer,choicePlayer){
    if (choiceComputer == choicePlayer){
        resultMatch.innerHTML = "We have a tie, it will count as 1 point for both"
        ++scoreComputer;
        ++scorePlayer;
        playerScore.innerHTML = "The player score is : "+ scorePlayer;
        computerScore.innerHTML = "The computer score is : "+ scoreComputer;
        
    } else if(choiceComputer=='rock' && choicePlayer == 'scissors'
            ||choiceComputer== 'paper' && choicePlayer == 'rock'
            ||choiceComputer== 'scissors' && choicePlayer == 'paper'){
        resultMatch.innerHTML = "The computer won!, " + choiceComputer +" beats "+ choicePlayer;
        ++scoreComputer;
        playerScore.innerHTML = "The player score is : "+ scorePlayer;
        computerScore.innerHTML = "The computer score is : "+ scoreComputer;
        
    } else {
        resultMatch.innerHTML = "The player won!, "+ choicePlayer+" beats "+ choiceComputer;
        ++scorePlayer;
        playerScore.innerHTML = "The player score is : "+ scorePlayer;
        computerScore.innerHTML = "The computer score is : "+ scoreComputer;
    }
}

