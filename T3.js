const wining=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; 
let turn= true;

let box = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset-btn")
box.forEach((btn) => { 
    btn.addEventListener("click", () => {
       if(turn){
        btn.innerHTML = "O";
        turn = false;
        box.disabled = true;
       }
       else{
        btn.innerHTML = "X";
        turn = true;
       }
       
     
    }
)})
