"use strict";

const start_button = document.querySelector(".start.button");
const result = document.getElementById("result");


function hover(element, enter_func, leave_func){
    element.addEventListener('mouseenter', enter_func);
    element.addEventListener('mouseleave', leave_func);
}


hover(start_button,() => { start_button.classList.add("button_hovered") },
() => {  start_button.classList.remove("button_hovered") })


const options = ["rock", "paper", "scissor"]


function play_rps(){
    return options[Math.floor(Math.random() * 3)];
}

const status_ = [ "Its a Tie", "You have won!", "Computer has won!"];

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

function play_match(){
 let computer_choice = play_rps();
 let player_choice = play_rps();

 let winner = identify_winner(computer_choice, player_choice);

 let message = status_[winner];

 console.log(message);

 result.innerText = message;

 winner == 1 ? result.style.backgroundColor = '#14d226' :  winner == 2 ? result.style.backgroundColor = '#FFCCCB' : null;
 
}



start_button.addEventListener('click',play_match);