const result = document.getElementById('result-text')
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')


let playerPoints = 0;
let computerPoints = 0;

const GAME_OPTIONS = {
   ROCK: 'rock',
   PAPER: 'paper',
   SCISSORS: 'scissors'
}


const humanChoice = (choiceHuman) => {
    return choiceHuman  
}

const computerChoice = () => {

    const choices = [GAME_OPTIONS.ROCK,GAME_OPTIONS.PAPER ,GAME_OPTIONS.SCISSORS];
    const indexRamdom = Math.floor(Math.random() * choices.length);
    return choices[indexRamdom];
}

const verifyWinner = (choiceHuman)=>{
     
    const human = humanChoice(choiceHuman)
    const computer  = computerChoice();

     console.log(choiceHuman)
     console.log(computer)

     if(human === computer){
        result.innerHTML = "It's tied."
     }else if(
        human === GAME_OPTIONS.ROCK && computer === GAME_OPTIONS.SCISSORS || 
        human === GAME_OPTIONS.SCISSORS && computer == GAME_OPTIONS.PAPER ||
        human === GAME_OPTIONS.PAPER && computer == GAME_OPTIONS.ROCK
     ){
        playerPoints++
        playerScore.textContent = playerPoints
        result.innerHTML = "&#x1F935;You win!"
     }
     else{
        computerPoints++
        computerScore.textContent = computerPoints  
        result.innerHTML = "&#x1F4BB;The computer win."
     }

}

    