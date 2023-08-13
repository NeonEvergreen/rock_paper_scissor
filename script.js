"use strict";


const tallier = {"computer" : 0, "human" : 0, "tie" : 0};


document.addEventListener("DOMContentLoaded", ()=>{

// element identifications

const button = document.querySelectorAll(".start-button");
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

// Initialising inner Texts and winner
player.innerText = null;
computer.innerText = null;
result.style.backgroundColor = "white";

//Hover functionality for buttons
function hover(element, enter_func, leave_func){
    element.addEventListener('mouseenter', enter_func);
    element.addEventListener('mouseleave', leave_func);
}

button.forEach((choice_button) => hover(choice_button, () => { choice_button.classList.add("button_hovered") },
() => {  choice_button.classList.remove("button_hovered") }));


//Game logic

const options = ["rock", "paper", "scissor"];
const status_ = [ "Its a Tie", "You have won!", "Computer has won!"];


//// computer choice
function play_rps(){
    return options[Math.floor(Math.random() * 3)];
}

//// Identifying winner
function identify_winner(choice_1, choice_2){
    
    if(choice_1 == "rock" && choice_2 == "rock"){
        return 0;
    }

    if(choice_1 == "rock" && choice_2 == "paper"){
        return 2;
    }
    
    if(choice_1 == "rock" && choice_2 == "scissor"){
        return 1;
    }

    if(choice_1 == "paper" && choice_2 == "rock"){
        return 1;
    }

    if(choice_1 == "paper" && choice_2 == "paper"){
        return 0;
    }

    if(choice_1 == "paper" && choice_2 == "scissor"){
        return 2;
    }

    if(choice_1 == "scissor" && choice_2 == "rock"){
        return 2;
    }

    if(choice_1 == "scissor" && choice_2 == "paper"){
        return 1;
    }

    if(choice_1 == "scissor" && choice_2 == "scissor"){
        return 0;
    }

}

//// Update status

function declareWinner(winner_number){

    let message = status_[winner_number];

    console.log(message);
   
    result.innerText = message;
   
    winner_number == 1 ? result.style.backgroundColor = '#14d226' :  winner_number == 2 ? result.style.backgroundColor = '#FFCCCB' : result.style.backgroundColor = "yellow";
    ;   

}


function keepWinTally(winnerNumber){
    if(winnerNumber == 0){
        tallier["tie"] += 1; 
    }
    if(winnerNumber == 1){
        tallier["human"] += 1; 
    }
    if(winnerNumber == 2){
        tallier["computer"] += 1; 
    }

    console.log(tallier);
}

//// Initialise match
function play_match(button_choice){

    if (!button_choice) {
        console.error("Invalid button_choice:", button_choice);
        return;
    }

let computer_choice = play_rps();

let player_choice;

if(button_choice.classList.contains("rock")) { player_choice = "rock";}
if(button_choice.classList.contains("paper")) {  player_choice = "paper";}
if(button_choice.classList.contains("scissor"))  { player_choice = "scissor";}


 player.innerText = player_choice; 
 computer.innerText = computer_choice;

 let winner = identify_winner(player_choice, computer_choice);

 //Console data
 keepWinTally(winner);

 //Message content
 declareWinner(winner);
}

//// Event listener for click
button.forEach((button_choice) => button_choice.addEventListener('click', () => play_match(button_choice)));
});