 //add all te buttons listener on te bottom of the page

  let board=["","","","","","","","",""]
  let currentPlayer = "X"
  let isGameActive = true
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const playerDisplay = document.querySelector('.playernymber');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.endannouncer');

  const p1name=document.getElementById("playerX").value
  const p2name=document.getElementById("playerO").value

  const p1won= p1name + "has won"
  const p2won= p2name + "has won"
  const tie= "The Game has tied"

  const winningConditions=[
      [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]

  


  const userAction = (tile,index) => {
      if(isValidAction(tile) && isGameActive){
          tile.innerText = currentPlayer
          tile.classList.add(`player${currentPlayer}`)
          updateBoard(index)
          handleResultValidation()
          changePlayer()
      }
  }

  const changePlayer = () => {
      player.Display.classList.remove(`player${currentPlayer}`)
      currentPlayer = currentPlayer ==="X" ? "O" : "X"
      playernumber.innerText=currentPlayer
      playernumber.classList.add(`player${currentPlayer}`)
  }


  const announce=(type) => {

    switch(type){
        case p1won:
            announcer.innerText=p1won;
            break;
        case p2won:
            announcer.innerText=p2won;
            break;
        case tie:
            announcer.innerText=tie    
            
    }
    announcer.classList.remove("hide")
  }

  function handleResultValidation(){
      let roundWon=false;
      for(let i=0;i<8;i++){
          const winCondition = winningConditions[i];
          const a =board[winCondition[0]]
          const b =board[winCondition[1]]
          const c =board[winCondition[2]]

          if (a==="" || b==="" || c===""){
              continue;
          }
          if (a===b && b===c){
              roundWon=true;
              break
          }
      }
      if (roundWon){
          announce(currentPlayer ==="X" ? p1name+" won" : p2name+" won")
          isGameActive=false
          return
      }
      if(!board.includes("")){
          announce(tie)
      }



  }


  const updateBoard=(index)=>{
      bboard[index]=currentPlayer
  }

  const isValidAction =(tile) => {
    if (tile.innerText != "") {
        return false
    }
    return true
}



 const resetBoard=()=>{
     board=["","","","","","","","",""]
     isGameActive=true
     announcer.classList.add("hide")

     if (currentPlayer ==="O"){
         changePlayer()
     }

     tiles.forEach(tile=>{
         tile.innerText=""
         tile.classList.remove("playerX")
         tile.classList.remove("playerO")
     })
 }

 tiles.forEach((tile,index) => {

    tile.addEventListener("click", () => userAction(tile,index) )

  })