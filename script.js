const header = document.querySelector(".header");
const buttons = document.querySelectorAll(".btn");
const value = document.querySelector(".value");

let count = 0;

buttons.forEach(button => {
    button.addEventListener("click", performAction);
});

function performAction(e) {
    const classTarget = e.currentTarget.classList;
    if(classTarget.contains("decrease")) {
        count--;
        
    }
    else if(classTarget.contains("increase")){
        count++;
        
    }else{
        count = 0;
    }

    if(count < 0) {
        value.style.color = "#e4215c";
        header.style.color = "#e4215c";
    } else if(count > 0) {
        value.style.color = "#93d823";
        header.style.color = "#93d823";

    } else if(count === 0){
        value.style.color = "#cbc0b0";
        header.style.color = "#cbc0b0";
    }
    value.textContent = count;
}