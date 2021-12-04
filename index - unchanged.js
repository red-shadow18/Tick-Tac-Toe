
//Declaring Variables

let bgmusic= new Audio("music.mp3")
let turn= new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let isGameFinished=false
let playernumber=document.getElementsByClassName("playernumber")[0]
console.log(playernumber.innerText)
const wonImage= document.getElementsByClassName("winner")[0]
const playerX=document.getElementById("playerX")
//const p1=playerX.textContent
const playerO=document.getElementById("playerO")
//const p2=playerO.innerText
let p1=""
let p2=""
let currentTurn="X"
//let inputs1=document.getElementById("inputs1")


//Writting Functions

//Function to change turn
function changeTurn(){
    return currentTurn=== "X"?"0": "X"
}

//Function to check State of game


//Game Logic
//inputs1.addEventListener("input", function(){
    //if(playerO.value !=="" && playerX.value !=="" ){
    
   //     play.removeAttribute("disabled")
    //}
    

//})


// else{
//     play.disabled=false
// }
start.addEventListener("click", function(){
  if (p1 ==="" && p2===""){

   p1=playerX.value
   p2=playerO.value


   console.log(p1)
    
    
    playerX.value = p1 + " is player X"
    playerO.value = p2 + " is player O"
    playerO.setAttribute("readonly", true)
    playerX.setAttribute("readonly", true)
    bgmusic.play()
    playernumber.style.visibility="visible"
    }





let tile=document.getElementsByClassName("tile")
Array.from(tile).forEach(function (element){
    let display= element.querySelector(".display")
    element.addEventListener("click", function () {
            if (display.innerText === "") {
                display.innerText = currentTurn
                
                currentTurn=changeTurn()
                playernumber.textContent = "Turn for " + currentTurn
                turn.play()
                checkWin()
                if (!isGameFinished){
                   
                playernumber.textContent = "Turn for " + currentTurn
            }
            }

        })
})

})



function checkWin(){
    let displays= document.getElementsByClassName("display")
    const winningConditions=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    
    winningConditions.forEach(function (position){
      if (displays[position[0]].innerText === displays[position[1]].innerText && displays[position[1]].innerText===displays[position[2]].innerText && displays[position[0]].innerText !=="") {
          document.getElementsByClassName("playernumber")[0].innerText=displays[position[0]].innerText+" has won"
          isGameFinished=true
          wonImage.style.visibility ="visible"
          bgmusic.pause()

      }
    })
}

//Reset button

reset.addEventListener("click" , function(){
    let display= document.querySelectorAll(".display")
    Array.from(display).forEach(function(element){
        element.textContent=""

    })
    
    isGameFinished=false
    playerX.value=""
    playerO.value=""
    playerO.removeAttribute("readonly")
    playerX.removeAttribute("readonly")
    bgmusic.pause()
    p1=""
    p2=""
    playernumber.style.visibility="hidden"
    wonImage.style.visibility ="hidden"
    currentTurn="X"
    playernumber.textContent = "Turn for " + currentTurn
})