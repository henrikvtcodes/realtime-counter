// COUNT FUNCS
let counter = document.getElementById("count")
let count = 0
function updateDisplay(){
    counter.innerHTML = count;
};
updateDisplay();

// TODO: ADD WEBSOCKET COMMUNICATIONS
// const socket = io();
// 
// function pushChange(){
//     
// }

// BUTTON CODE
let increment = document.getElementById("inc")
let decrement = document.getElementById("dec")

increment.addEventListener("click", ()=>{
    count++;
    console.log(count)
    updateDisplay();
    }
);

decrement.addEventListener("click", ()=>{
    count--;
    console.log(count)
    updateDisplay();
    }
);