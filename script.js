const start_button = document.querySelector(".start.button");

function hover(element, enter_func, leave_func){
    element.addEventListener('mouseenter', enter_func);
    element.addEventListener('mouseleave', leave_func);
}




hover(start_button,() => { start_button.classList.add("button_hovered") },
() => {  start_button.classList.remove("button_hovered") })

// start_button.addEventListener('click', function(){this.style.setProperty('background-color','red')});