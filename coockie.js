const infla = 5;
var image = document.getElementById("image");
var multiTwo = document.getElementById("multiTwo");
var multiFive = document.getElementById("multiFive");
var reduxTwo = document.getElementById("reduxTwo");
var reduxFive = document.getElementById("reduxFive");
var scoreHtml = document.getElementById("scoreHtml");
var prix = [50,200,50,200];
var score = 0;
var multiClic = 1;
var multiAuto = 1;

multiTwo.innerHTML = "Clique X2 (" + prix[0] + ")";
multiFive.innerHTML = "Clique X5 (" + prix[1] + ")";
reduxTwo.innerHTML = "Clique X2 (" + prix[2] + ")";
reduxFive.innerHTML = "Clique X5 (" + prix[3] + ")";

function addScoreClick() {
  score += multiClic;
  scoreHtml.innerHTML= score;
}

function addScoreAuto() {
  score += multiAuto;
  scoreHtml.innerHTML= score;
}

function addMultiTwo() {
  if (score >= prix[0]) {
    multiClic *= 2;
    score -= prix[0];
    prix[0] *= infla;
    multiTwo.innerHTML = "Clique X2 (" + prix[0] + ")";
  }
}

function addMultiFive() {
  if (score >= prix[1]) {
    multiClic *= 5;
    score -= prix[1];
    prix[1] *= infla;
    multiFive.innerHTML = "Clique X5 (" + prix[1] + ")";
  }
}

function addReduxTwo() {
  if (score >= prix[2]) {
    multiAuto *= 2;
    score -= prix[2];
    prix[2] *= infla;
    reduxTwo.innerHTML = "Clique X2 (" + prix[2] + ")";
  }
}

function addReduxFive() {
  if (score >= prix[3]) {
    multiAuto *= 5;
    score -= prix[3];
    prix[3] *= infla;
    reduxFive.innerHTML = "Clique X5 (" + prix[3] + ")";
  }
}

image.addEventListener("click",addScoreClick);
multiTwo.addEventListener("click",addMultiTwo);
multiFive.addEventListener("click",addMultiFive);
reduxTwo.addEventListener("click",addReduxTwo);
reduxFive.addEventListener("click",addReduxFive);

setInterval(addScoreAuto,1000);
