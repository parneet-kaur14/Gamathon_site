const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// this is to get the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// this fucntion helps to update scores
function updateScores(result) {
    if (result === 'You win!') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === 'Computer wins!') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

// moving emojis
function shakeEmojis() {
    playerChoiceElement.style.transform = 'rotate(10deg)';
    computerChoiceElement.style.transform = 'rotate(-10deg)';
    setTimeout(() => {
        playerChoiceElement.style.transform = 'rotate(0deg)';
        computerChoiceElement.style.transform = 'rotate(0deg)';
    }, 300);
}

// Function to play the game
function playGame(playerChoice) {
    shakeEmojis();

    const computerChoice = getComputerChoice();

    playerChoiceElement.textContent = playerChoice === 'rock' ? '🪨' :
                                      playerChoice === 'paper' ? '📄' : '✂️';
    computerChoiceElement.textContent = computerChoice === 'rock' ? '🪨' :
                                       computerChoice === 'paper' ? '📄' : '✂️';

    const result = determineWinner(playerChoice, computerChoice);
    resultElement.innerHTML = `<p>${result}</p>`;

    updateScores(result);
}

// Reset button funciton
function resetGame() {
    playerChoiceElement.textContent = '🤚';
    computerChoiceElement.textContent = '🤚';
    resultElement.innerHTML = '<p>Choose your move!</p>';
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}
