let selectedButton;
buttons = (document.getElementsByClassName('selection-btn'));

let userScore = 0;
let compScore = 0;
let scoreboard = document.querySelector('.scoreboard');
        
for (i = 0; i < 3; ++i){
    buttons[i].addEventListener('click', function(){

        //fade out
        scoreboard.style.opacity = 0;

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
        disableBtns();
        displayRestartBtn();
    }
    if (compScore === 3){
        announce = 'You lose the game! ' + userScore + ' round(s) to ' + compScore + '. Computer Yeezus is too wavy for you!';
        disableBtns();
        displayRestartBtn();
    }

    //fade in
    setTimeout(function(){
        document.querySelector('.round-outcome').innerHTML = announce;
        document.querySelector('.user-score').innerHTML = `Your score: ${userScore}`;
        document.querySelector('.ye-score').innerHTML = `Ye's score: ${compScore}`;
        scoreboard.style.opacity = 1;
    },500);

    return;
}

function disableBtns(){
    let header = document.querySelector('.selection-header');
    header.style.opacity = 0.5;
    let buttons = document.getElementsByClassName('selection-btn');
    for (i = 0; i < 3; ++i){
        //change appearance
        buttons[i].style.opacity = 0.5;
        buttons[i].style.outline = 'none';
        buttons[i].style.cursor = 'default';
        //disable
        buttons[i].disabled = true;
    }
}

let restartBtn = document.querySelector('.restart-btn');
restartBtn.addEventListener('click', function(){
    location.reload();
})

function displayRestartBtn(){
    restartBtn.style.display = 'initial';
}

