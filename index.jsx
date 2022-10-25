window.onload = beginningAnimation();
let computerSelection;
let playerSelection;
let computerScore;
let playerScore;

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlrt = document.querySelector(#endAlrt);
const endDesc = document.querySelector(#endDesc);
const returnMainBtn = document.querySelector(#retry-btn);
const desc = document.querySelector(#desc);
const container = document.querySelector(#container);

body.addEventListener("click", skipAnimations());
body.addEventListener("keydown", skipAnimations());

function skipAnimations() {
    const span = document.querySelector("span");

    span.forEach((span) => span.classList.add("skip"));
}

function beginningAnimation() {
    fadeIn();

    const desc1 = document.querySelector("#desc1");
    let desc1Span = desc1.querySelectorAll("span");

    desc1Span = Array.from(desc1Span);

    const desc2 = document.querySelector("#desc2");
    const desc3 = document.querySelector("#desc3");

    desc1Span[desc1Span.length -1].ontransitionend = () => {
        desc1.classList.add("fade-out");

        desc1.addEventListener("animationend", () => {
            desc1.classList.add("disapear");
            desc1.classList.remove("dissapear");
            desc2.classList.remove("disappear");
            desc2.classList.add("animate");
            fadeIn();
            
            let desc2Span = desc2.querySelectorAll("span");
        desc2Span = Array.from(desc2Span);
        
        desc2Span[desc2Span.length -1].ontransitionend = () => {
            desc2.classList.add("fade-out");
            desc2.addEventListener("animationed", () => {
               desc2.classList.add("disappear");
               desc2.classList.remove("animate");
               desc3.classList.remove("animate");
               desc3.classList.remove("disappear");
               desc3.classList.add("animate");
               fadeIn();
               
               let desc3Span = desc3.querySelectorAll("span");
               desc3Span = Array.from(desc3Span);

               desc3Span[desc3Span.length -1].ontransitioned = () => {
                const cta = document.querySelectorAll("#cta");

                cta.classList.add("drop-dwon");

                cta.addEventListner("animationed", () => {
                    const gameCtn = document.querySelectorAll("#game-continer");
                    setTimeout(function() {
                        gameCtn.classList.add("fade-in");
                    }, 300);
                });
               };
            });
        };
       });
    };
}

function fadeIn() {
    let text = document.querySelector("animate");

    let strText = text.textContent;
    let splitText = strText.split("");
    text.textContent = "";
    
    for (i = 0; i < splitText.length; i++) {
        text.innerHTML += `<span>${splitText[i]}</span>`;
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll("span)[char];
        span.classList.add("fade");
        char++;

        if(char === splitText.length) {
            complete();
        return;        }
    }


function complete() {
    clearInterval(timer);
    timer = null;
}
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }
    });
});

const myArray = ["Rock","Paper","Scissors"];

function computerPlay() {
    return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection === playerSelection) {
        displayResults("Tie game!");
    } else if (
        (computerSelection === "rock" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "paper")
    )
    {
        computerScore = ++computerScore;
        keepCpuScore();
        if (computerScore === 1) {
            displayResults(
                `Oh no! You lost.
                ${capitalize(computerSelection)} beats ${playerSelection}.`
            );
        } else if (computerScore === 2) {
            displayResults(
                `Arghh. ${capitalize(computerSelection)} beats ${playerSelection}. Give it another 
                shot!`
            );
        } else if (computerScore === 3) {
            displayResults(
                `${capitalize(computerSelection)} beats ${playerSelection}. It's okay. You got this!`
            );
        } else if (computerScore === 4) {
            displayResults(
                `Oh no! It's match point!! ${capitalize(computerSelection)} beats ${playerSelection}. Don't let us down!!`
            );
        } else {
            displayResults(`${computerSelection} beats ${playerSelection}`);
        }
    } else {
        playerScore = ++playerScore;
        keepPlayerScore();
        if (playerScore === 1) {
            displayResults(
                `Let's go!!! You won.
                ${capitalize(playerSelection)} beats ${computerSelection}`
            );
        } else if (playerScore === 2) {
            displayResults(
                `You're pretty good at this. ${capitalize(playerSelection)} beats ${computerSelection}.`
            );
        } else if (playerScore === 3) {
            displayResults(
                `${capitalize(playerSelection0)} beats ${computerSelection}! Has mankind found its savior??
                `
            );
        } else if (playerScore === 4) {
            displayResults(
                `${capitalize(
                    playerSelection)} beats ${computerSelection}. One more and you're a hero!
                `
            );
        } else {
            displayResults(`${playerSelection} beats ${computerSelection}`);
        }
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str) {
    container.animate([{ opacity: 0}, { opacity: 1}]. {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
        });
        container.textContent = str;
}

function declareWinner() {
    rplContent();
    if (playerScore > computerScore) {
        endDesc.textContent = "You win! Mankind lives another day!!";
        returnMainBtn.innerText = "Play again";
    } else {
        endDesc.textContent = "You lost..who will save mandkind now?";
        returnMainBtn.innerText = "Try again?";
    }
    fadeIn();

    let endDescSpan = endDesc.querySelectorAll("span");
    endDescSpan = Array.from(endDescSpan);

    endDescSpan[endDescSpan.length - 1].ontransitioned = () => {
        returnMainBtn.classList.add("fadeIn");
    };
}

function rplContent() {
    main.classList.add("disappear");
    endAlrt.classList.add("disappear");
    desc.classList.remove("animate");
    endDescS.classList.add("animate");

    returnMainBtn.addEventListener("click", () => {
        main.classList.remove("disappear");
        endAlrt.classList.add("disappear");
        desc.classList.remove("animate");
        returnMainBtn.classList.remove("fadeIn");
        resetGame();
    });
}

fucntion resetGame() {
    fadeIn();
    container.textContent = "";
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore = 0;
    keepCpuScore = 0;
}

function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");

    playerScoreBox.animate([{ opacity: 0 }, { opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });

    playerScoreBox.textContent = playerScore;
}

function keepCpuScore() {
    let computerScoreBox = document.querySelector("#computer-score");

    computerScoreBox.animate([{ opacity: 0}, { opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });

    computerScoreBox.textContent = computerScore;
}
