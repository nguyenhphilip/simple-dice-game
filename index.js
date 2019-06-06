function generateNumber(){
  return (Math.floor(Math.random() * 6) + 1);
}

document.querySelector("button").onclick = function(){
  var dice1 = generateNumber();
  var dice2 = generateNumber();
  document.querySelector(".player1").lastElementChild.setAttribute("src", ("images/dice" + dice1 + ".png"));
  document.querySelector(".player2").lastElementChild.setAttribute("src", ("images/dice" + dice2 + ".png"));

  if(dice1 == dice2){
    document.querySelector("h1").innerHTML =  "<em>Tie!</em>";
  } else if (dice1 > dice2){
    document.querySelector("h1").innerHTML =  "<em>Dice 1 Wins!</em>";
  } else {
    document.querySelector("h1").innerHTML =  "<em>Dice 2 Wins!</em>";
  }
};
