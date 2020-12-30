var rand1 = Math.floor(Math.random()*6) + 1;
var rand2 = Math.floor(Math.random()*6) + 1;

var path1 = "images/dice"+rand1+".png";
var path2 = "images/dice"+rand2+".png";

document.querySelector(".img1").setAttribute("src",path1);
document.querySelector(".img2").setAttribute("src",path2);

if(rand1 == rand2) {
  document.querySelector("h1").textContent = "IT'S DRAW!";
} else if(rand1 > rand2) {
  document.querySelector("h1").textContent = "😎PLAYER 1 WINS!";
} else {
  document.querySelector("h1").textContent = "PLAYER 2 WINS!😎";
}
