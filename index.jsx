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

