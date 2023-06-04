console.log("Hello World!");
let bg_music = new Audio('./audio/music.mp3');
let audioTurn = new Audio('./audio/ting.mp3');
let gameOver = new Audio('./audio/gameover.mp3');
let isgameover = false; 
let anyWin = false;
let screenWidth = screen.width;
let boardArray = [];
const emptyArray = [];


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
            anyWin = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "block";
            let boxes = document.querySelectorAll('.box')
            boxes[e[0]].style.backgroundColor = "green";
            boxes[e[1]].style.backgroundColor = "green";
            boxes[e[2]].style.backgroundColor = "green";
        }
    });
}

// Coloring all boxes blue
function colorBoxes(){
    Array.from(boxes).forEach(element => {
        element.style.backgroundColor = "lightblue";
    })
} 


// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.box-text')
    element.addEventListener('click',function clickOnBox(){
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
                boardArray.push(boxtext.innerText);
                if(boardArray.length == 9 && !anyWin){
                    document.querySelector('.info').innerText =  " Tie";
                    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "block";
                    colorBoxes();
                }
            }
        }
    });
});

// reset
let reset = document.querySelector('#reset')
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.box-text')
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    let box = document.querySelectorAll('.box')
    Array.from(box).forEach(element => {
        element.style.backgroundColor = "white"
    });
    turn = "X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display = "none";
    anyWin = false;
    boardArray.length = 0;
})

let container = document.querySelector('#container')
if(screenWidth <= 750 ){
    container.classList.add('phone')
    container.classList.remove('container')
}
