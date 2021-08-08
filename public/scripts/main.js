// COUNT FUNCS
let counter = document.getElementById("count")
let count = 0
function updateDisplay(){
    counter.innerHTML = count;
};
updateDisplay();

// BUTTON CODE
let increment = document.getElementById("inc")
let decrement = document.getElementById("dec")

increment.addEventListener("click", ()=>{
    count++;
    updateDisplay();
});

decrement.addEventListener("click", ()=>{
    count--;
    updateDisplay();
});

// WEBSOCKET COMMUNICATIONS

function pushChange(){
    
}