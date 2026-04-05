const result = document.getElementById('result-text')
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')


let playerPoints = 0;
let computerPoints = 0;


const humanChoice = (choiceHuman) => {
    return choiceHuman  
}

const computerChoice = () => {

    const choices = ['rock','paper','scissors'];
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
        human === 'rock' && computer === 'scissors' || 
        human === 'scissors' && computer == 'paper' ||
        human === 'paper' && computer == 'rock'
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

    