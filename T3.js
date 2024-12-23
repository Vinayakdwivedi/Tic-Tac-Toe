const winning=[
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



let btns = document.querySelectorAll(".btn")
btns.forEach((box) => {
    box.addEventListener("click", () => {
        if(box.innerHTML=== ""){
           if(turn){ 
           box.innerHTML = "O"
           turn = false;
            }
            else{box.innerHTML = "X"
                turn = true;
            }
        }
       
       checkwinner()

        })  

}) 
let h1 = document.querySelector(".hh1");
const checkwinner = () => {
    for(let pattern of winning) {
        let win1 = btns[pattern[0]].innerHTML;
        let win2 = btns[pattern[1]].innerHTML;
        let win3 = btns[pattern[2]].innerHTML;

        // console.log(win1)
        if(win1 != "" && win2 != "" && win3 != ""){
            if(win1 === win2 && win2 === win3){
                if (win1 === "O"){
                    h1.innerHTML = "player 1 winner";

                }
                else if (win1 === "X"){
                    h1.innerHTML = " Player 2 winner";
                    // Add your game winning logic for Player 2 here
                  }
                            
            }
            if(h1 == "tic-tac-toe game"){
                h1.innerHTML = "tie";
            }
        }
    }

}

