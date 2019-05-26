let selectedButton;
buttons = (document.getElementsByClassName('selection-btn'));

let userScore = 0;
let compScore = 0;
        
for (i = 0; i < 3; ++i){
    buttons[i].addEventListener('click', function(){
        selectedButton = this.innerHTML;
        computerSelection = computerPlay();
        playRound(selectedButton,computerSelection);
    })
}

function computerPlay(){
    choiceArray = ["Rock", "Paper", "Scissors"];
    randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    let announce;
    if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        announce = 'You Win! Rock is wavier than Scissors';
        userScore++;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        announce = 'You Lose! Rock is less wavy compared Paper';
        compScore++;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        announce = 'You Lose! Scissors are less wavy compared to Rock';
        compScore++;
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        announce = 'You Win! Scissors is wavier than Paper';
        userScore++;
    }
    else if (playerSelection === 'Paper' &&computerSelection === 'Scissors'){
        announce = 'You Lose! Paper is less wavy compared to Scissors';
        compScore++;
    }
    else if (playerSelection === 'Paper' &&computerSelection === 'Rock'){
        announce = 'You Win! Paper is wavier than Rock';
        userScore++;
    }
    else if (playerSelection === computerSelection){
        announce = 'Tie! ' + playerSelection + ' and ' + computerSelection + '. Equally wavy';
    }
    if (userScore === 3){
        announce = 'You win the game! ' + userScore + ' rounds to ' + compScore + '. You\'re ultra wavy';
        clearBtns();
    }
    if (compScore === 3){
        announce = 'You lose the game! ' + userScore + ' round(s) to ' + compScore + '. A computer is wavier than you!';
        clearBtns();
    }
    document.querySelector('.round-outcome').innerHTML = `${announce}`
    return;
}

function clearBtns(){
    let header = document.querySelector('.selection-header');
    header.style.display = 'none';
    let buttons = document.getElementsByClassName('selection-btn');
    for (i = 0; i < 3; ++i){
        buttons[i].style.display = 'none';
    }
}