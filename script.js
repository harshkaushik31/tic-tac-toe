console.log("Hello World!");
let bg_music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let isgameover = false; 

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
    let pos = document.getElementsByClassName('box-text');
    wins.forEach(e=>{
        if( (pos[e[0]].innerText !=="" ) && (pos[e[0]].innerText === pos[e[1]].innerText) && (pos[e[1]].innerText === pos[e[2]].innerText) ){
            document.querySelector('.info').innerText = pos[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "block";
        }
    })
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
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
        }
    });
});

// reset
reset = document.querySelector('#reset')
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.box-text')
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover=false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "none";
})