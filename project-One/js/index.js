document.addEventListener('DOMContentLoaded', () => {
const blocks = document.querySelectorAll('.blocks div');
const result = document.querySelector('#result');
const displayPlayer = document.querySelector('#current-player');
// const resetGame = document.querySelector('#resetButton')
let currentPlayer = 1;


const winningArrays = [];

  function checkBoard() {
    //not sure how to reset

    for (let y = 0; y < winningArrays.length; y++) {
      //check those squares to see if player-two have 4
      if (playerOne.winningArrays[y[0]]&&playerOne.winningArrays[y[1]]&&playerOne.winningArrays[y[2]]&&playerOne.winningArrays[y[3]]){
        result.innerHTML = 'Player One Wins!'      }
      //check those squares to see if player-two have 4
      if (playerTwo.winningArrays[y[0]]&&playerTwo.winningArrays[y[1]]&&playerTwo.winningArrays[y[2]]&&playerTwo.winningArrays[y[3]]) {
        result.innerHTML = 'Player One Wins!'  
      }
      
    }
    
  // console.log('hi',winningArrays);
}
   
  for (let i = 0; i < blocks.length; i++) {
    // squares[i].addEventListener("#resetButton", function () {
    //   window.location.reload();
    // });
    blocks[i].onclick = () => {
      let playerOne= blocks[i].classList.add('player-one');
      let playerTwo= blocks[i].classList.add('player-two');
      //appear circles in slow motion of 9 secs
      TweenMax.from(blocks[i], { duration: 0.9, alpha: 0});

      //if the square below your current square is taken, you can go ontop of it
      // !squares[i].classList.contains('block');

      //the game is always start by player One 
      if (currentPlayer == 1) {
          currentPlayer = 2;
          playerOne;
          blocks[i].style.backgroundColor = "red";
          displayPlayer.innerHTML = currentPlayer;
      } else if (currentPlayer == 2){
          currentPlayer = 1;
          playerTwo;
          blocks[i].style.backgroundColor= "yellow";
          displayPlayer.innerHTML = currentPlayer;
      } //outside of the box will be alertelse 
      else (blocks==!blocks[i])  
      alert('Not allowed');
    }
    checkBoard();

  }
  function resetGame() {
    document.querySelector('#restartButton').addEventListener('click', function(){
      window.location.reload();
    });
  }
  resetGame();

  //end
})
