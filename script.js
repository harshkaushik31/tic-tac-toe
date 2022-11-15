console.log("Hello World!");
let bg_music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');

let turn = "X";

// Function to change turn
const changeTurn=()=>{
    return turn === "X"?"0":"X"
}

// Function to check for a win
const checkWin = () => {
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let pos = document.getElementsByClassName('box');
    // 0 1 2
    if(pos[0].innerText!="" && pos[0].innerText===pos[1].innerText && pos[1].innerText===pos[2].innerText){
        document.getElementsByClassName("info")[0].innerText = pos[0].innerText + " wins";
        return true;
    }
    // 3 4 5
    if(pos[3].innerText!="" && pos[3].innerText===pos[4].innerText && pos[4].innerText===pos[5].innerText){
        document.getElementsByClassName("info")[3].innerText = pos[3].innerText + " wins";
        return true;
    }
    // 6 7 8
    if(pos[6].innerText!="" && pos[6].innerText===pos[7].innerText && pos[7].innerText===pos[8].innerText){
        document.getElementsByClassName("info")[6].innerText = pos[6].innerText + " wins";
        return true;
    }
    // 0 3 6 
    if(pos[0].innerText!="" && pos[0].innerText===pos[3].innerText && pos[3].innerText===pos[6].innerText){
        document.getElementsByClassName("info")[0].innerText = pos[0].innerText + " wins";
        return true;
    }
    // 1 4 7
    if(pos[1].innerText!="" && pos[1].innerText===pos[4].innerText && pos[4].innerText===pos[7].innerText){
        document.getElementsByClassName("info")[1].innerText = pos[1].innerText + " wins";
        return true;
    }
    // 2 5 8
    if(pos[2].innerText!="" && pos[2].innerText===pos[5].innerText && pos[5].innerText===pos[8].innerText){
        document.getElementsByClassName("info")[2].innerText = pos[2].innerText + " wins";
        return true;
    }
    // 0 4 8
    if(pos[0].innerText!="" && pos[0].innerText===pos[4].innerText && pos[4].innerText===pos[8].innerText){
        document.getElementsByClassName("info")[0].innerText = pos[0].innerText + " wins";
        return true;
    }
    // 2 4 6 
    if(pos[2].innerText!="" && pos[2].innerText===pos[4].innerText && pos[4].innerText===pos[6].innerText){
        document.getElementsByClassName("info")[2].innerText = pos[2].innerText + " wins";
        return true;
    }
}

// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            win = checkWin();
            if(win===false||win===undefined){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
        }
    });
});