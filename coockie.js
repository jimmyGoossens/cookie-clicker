var image = document.getElementById("image");
var multiTwo = document.getElementById("multiTwo");
var multiFive = document.getElementById("multiFive");
var reduxTwo = document.getElementById("reduxTwo");
var reduxFive = document.getElementById("reduxFive");
var scoreHtml = document.getElementById("scoreHtml");
var score = 0;
var multiplicateur = 1;
var reducteur = 1;

function addScoreClick(){
  score += multiplicateur;
  scoreHtml.innerHTML= score;
}

function addScoreAuto(){
  score += reducteur;
  scoreHtml.innerHTML= score;
}

function addMultiTwo() {
  multiplicateur *= 2;
}

function addMultiFive() {
  multiplicateur *= 5;
}

function addReduxTwo() {
  reducteur *= 2;
}

function addReduxFive() {
  reducteur *= 5;
}

image.addEventListener("click",addScoreClick);
multiTwo.addEventListener("click",addMultiTwo);
multiFive.addEventListener("click",addMultiFive);
reduxTwo.addEventListener("click",addReduxTwo);
reduxFive.addEventListener("click",addReduxFive);

setInterval(addScoreAuto,1000);
