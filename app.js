let playerScore = 0;
let aiScore = 0;

const playerScoreOutput = document.getElementById('user-score');
const aiScoreOutput = document.getElementById('ai-score');
const resetScoreBtn = document.getElementById('reset-score-btn')

const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
const resultText = document.getElementById('result');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const winScoreChoice = () => {
    do {
        winScoreInput = parseInt(window.prompt("Please enter a number from 1 to 100", ""), 10);
    } while (isNaN(winScoreInput) || winScoreInput > 100 || winScoreInput < 1);
}

const game = (playerChoice) => {
    console.log(playerChoice)
    const aiChoice = getAiChoice();
    switch (playerChoice + aiChoice) {
        case PAPER + ROCK:
        case ROCK + SCISSORS:
        case SCISSORS + PAPER:
            win(playerChoice, aiChoice);
            break;
        case ROCK + PAPER:
        case SCISSORS + ROCK:
        case PAPER + SCISSORS:
            lose(playerChoice, aiChoice);
            break;
        default:
            draw(playerChoice, aiChoice);
            break;
    }
}

const getAiChoice = () => {
    const aiChoices = [ROCK, PAPER, SCISSORS];
    const randomValue = Math.floor(Math.random() * 3);
    console.log(randomValue)
    return aiChoices[randomValue];
}

const win = (playerChoice, aiChoice) => {
    playerScore++;
    playerScoreOutput.innerHTML = playerScore;
    aiScoreOutput.innerHTML = aiScore;
    resultText.innerHTML = `Player choose ${playerChoice} but AI choose ${aiChoice}`;
    winScore('player win');
}

const lose = (playerChoice, aiChoice) => {
    aiScore++;
    playerScoreOutput.innerHTML = playerScore;
    aiScoreOutput.innerHTML = aiScore;
    resultText.innerHTML = `Player choose ${playerChoice} but AI choose ${aiChoice}`;
    winScore('ai win');
}

const draw = (playerChoice, aiChoice) => {
    playerScoreOutput.innerHTML = playerScore;
    aiScoreOutput.innerHTML = aiScore;
    resultText.innerHTML = `Player choose ${playerChoice} but AI choose ${aiChoice}`;
}

const resetGameBtn = () => {
    const defaultScore = 0;
    playerScoreOutput.innerHTML = defaultScore;
    aiScoreOutput.innerHTML = defaultScore;
    playerScore = defaultScore;
    aiScore = defaultScore;
    resultText.innerHTML = `You reset game score`;
    console.clear();
    winScoreChoice();
}

const winScore = (text) => {
    if (winScoreInput === playerScore || winScoreInput === aiScore) {
        alert(text);
        resetGameBtn();
    }
}

const main = () => {
    winScoreChoice();
    rockChoice.addEventListener('click', () => { game(ROCK); })
    paperChoice.addEventListener('click', () => { game(PAPER); })
    scissorsChoice.addEventListener('click', () => { game(SCISSORS); })
    resetScoreBtn.addEventListener('click', () => { resetGameBtn(); })
};

main();
