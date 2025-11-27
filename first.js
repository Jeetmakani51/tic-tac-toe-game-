let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-game");
let newBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

// 2d array
const winPatterns = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,4,8],
   [2,4,6],
   [0,3,6],
   [1,4,7],
   [2,5,8]
];

boxes.forEach((box) => {
   box.addEventListener("click",() => {
      console.log("box was clicked");
      if(turnO){
         box.innerText = "O";
         turnO = false;
      }else{
         box.innerText = "X";
         turnO = true;
      }
      box.disabled = true;
      checkWinner();
   });
});

const resetGame = () =>{
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
   msg.innerText = "";
}
const disableBoxes = () => {
   for(let box of boxes){
      box.disabled = true;
   }
}

const enableBoxes = () => {
   for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
   }
}

const showWinner = (winner) => {
   msg.innerText = `congratulations! winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
}

const checkWinner = () => {
   for(let pattern of winPatterns){
      let posVal1 = boxes[pattern[0]].innerText;
      let posVal2 = boxes[pattern[1]].innerText;
      let posVal3 = boxes[pattern[2]].innerText;

      if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
         if(posVal1 === posVal2 && posVal2 === posVal3){
            console.log("winner",posVal1);
            showWinner(posVal1);
         }
      }
   }
} 

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);