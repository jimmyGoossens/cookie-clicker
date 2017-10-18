
var image = document.getElementById("image");
var multiTwo = document.getElementById("multiTwo");
var multiTwoNbr=0;
var multiFive = document.getElementById("multiFive");
var multiFiveNbr=0;
var reduxTwo = document.getElementById("reduxTwo");
var reduxTwoNbr=0;
var reduxFive = document.getElementById("reduxFive");
var reduxFiveNbr=0;
var scoreHtml = document.getElementById("scoreHtml");
var prix = [50,200,50,200];
var score = 0;
var multiClic = 1;
var multiAuto = 1;

multiTwo.innerHTML = "Clique X2 (" + prix[0] + ")"+" achat:"+multiTwoNbr;
multiFive.innerHTML = "Clique X5 (" + prix[1] + ")"+" achat:"+multiFiveNbr;
reduxTwo.innerHTML = "Clique X2 (" + prix[2] + ")"+" achat:"+reduxTwoNbr;
reduxFive.innerHTML = "Clique X5 (" + prix[3] + ")"+" achat:"+reduxFiveNbr;

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
    prix[0] *= 5;
    multiTwoNbr+=1;
    multiTwo.innerHTML = "Clique X2 (" + prix[0] + ")" +" achat:"+multiTwoNbr;
  }
}

function addMultiFive() {
  if (score >= prix[1]) {
    multiClic *= 5;
    score -= prix[1];
    prix[1] *= 10;
    multiFiveNbr+=1;
    multiFive.innerHTML = "Clique X5 (" + prix[1] + ")"+" achat:"+multiFiveNbr;
  }
}

function addReduxTwo() {
  if (score >= prix[2]) {
    multiAuto *= 2;
    score -= prix[2];
    prix[2] *= 5;
    reduxTwoNbr+=1;
    reduxTwo.innerHTML = "Clique X2 (" + prix[2] + ")"+" achat:"+reduxTwoNbr;
  }
}

function addReduxFive() {
  if (score >= prix[3]) {
    multiAuto *= 5;
    score -= prix[3];
    prix[3] *= 10;
    reduxFiveNbr+=1;
    reduxFive.innerHTML = "Clique X5 (" + prix[3] + ")"+" achat:"+reduxFiveNbr;
  }
}

image.addEventListener("click",addScoreClick);
multiTwo.addEventListener("click",addMultiTwo);
multiFive.addEventListener("click",addMultiFive);
reduxTwo.addEventListener("click",addReduxTwo);
reduxFive.addEventListener("click",addReduxFive);

setInterval(addScoreAuto,1000);
