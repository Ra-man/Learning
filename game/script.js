const myArray = [
    'rock',
    'paper',
    'scissors'
];

function computerPlay() {
  return myArray[~~(Math.random()*myArray.length)]
}

let scorePlayer;
let scoreComputer;
let choicePlayer;
let choiceComputer;

function game(){
    scoreComputer = 0;
    scorePlayer   = 0;
        for( i = 0; i < 5; i++){
            onUserChoice();
                if (scoreComputer === 3){
                    alert('The computer won by ' + scoreComputer + ' - ' + scorePlayer)
                }
                if (scorePlayer === 3){
                    alert('The player won by ' + scorePlayer + ' - ' + scoreComputer)
                }
        }
}

function onUserChoice(){
    choiceComputer = computerPlay();
    choicePlayer = prompt('Choose between Rock, paper or scissors:' ,'');
        if ((choicePlayer.toLowerCase() == 'rock') ||
            (choicePlayer.toLowerCase() == 'paper')||
            (choicePlayer.toLowerCase() == 'scissors')){
            console.log(playRound(choiceComputer,choicePlayer));
        } 
        else {
            alert('That is not a valid choice, choose again');
            onUserChoice;
        }    
}
function playRound(choiceComputer,choicePlayer){
    if (choiceComputer == choicePlayer){
        alert('We have a tie, it will count as 1 point for both');
        return 'Tie \nComputer score: '+ ++scoreComputer +'\nYour score'+ ++scorePlayer;
    } else if(choiceComputer=='rock' && choicePlayer == 'scissors'
            ||choiceComputer== 'paper' && choicePlayer == 'rock'
            ||choiceComputer== 'scissors' && choicePlayer == 'paper'){
        alert('The computer won!');
        return ('The computer came on top, the scores are: \nComputer score: ' + ++scoreComputer + '\nYour score:' + scorePlayer);
    } else {
        alert('You won');
        return 'You won agains a machine congrats, the scores are: \n Computer score ' + scoreComputer + '\n Your score: '+ ++scorePlayer ;
    }
}
