var buttons = document.querySelectorAll(".btn");

var playerX = true;

var displayWinner = document.querySelector("#main #page2 h1")

var winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

function stopGame(){
    buttons.forEach((btn)=>{
        btn.disabled = true;
    })
}

function checkWin(){
    for(let win of winningPatterns){
        const [a,b,c] = win;
        if(buttons[a].innerText !== "" && buttons[a].innerText === buttons[b].innerText && buttons[b].innerText === buttons[c].innerText){
            return true;
        }
    }
    return false;
}

function gameLogic(){
    buttons.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            if(btn != btn.disabled){
                if(playerX === true){
                    btn.innerText = "X";
                    playerX = false;
                }
                else{
                    btn.innerText = "O";
                    playerX = true;
                }
                btn.disabled = true;
                
                if (checkWin()) {
                    stopGame();
                    if(playerX === false){
                        displayWinner.innerText = "X is winner";
                        console.log("X is winner");
                        page2Animation()
                    }
                    else{
                        displayWinner.innerText = "O is winner";
                        console.log("O is winner");
                        page2Animation()
                    }
                }
            }
        })
    })
    
}
gameLogic()

function resetGame(){
    var reset = document.querySelector("#reset-btn");

    reset.addEventListener("click",()=>{
        buttons.forEach(btn => {
            btn.innerText = "";
            btn.disabled = false;
            playerX = true;
        });
    });
}
resetGame();

document.querySelector("#page1 #play-btn").addEventListener("click",()=>{
    page1Animation()
})

function page1Animation(){
    gsap.to("#page1",{
        top: "-130%",
        duration: 1,
    })
}

function page2Animation(){
    gsap.to("#page2",{
        top: 0,
        duration: 1,
        delay: 0.3
    })
}

document.querySelector("#page2-btn").addEventListener("click",()=>{
        gsap.to("#page2",{
            top: "-130%",
            duration: 1,
        });
        buttons.forEach(btn => {
            btn.innerText = "";
            btn.disabled = false;
            playerX = true;
        });
})