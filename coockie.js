var image = document.getElementById("image");

var score = 0;
var timeMe = 1;
var clickMe=1;

var scoreHtml = document.getElementById("scoreHtml");
var multi = document.querySelector(".me");


image.addEventListener("click", function() {


  score = score + (1*clickMe);

  scoreHtml.innerHTML = score;


});

multi.addEventListener("click", function() {
  timeMe = timeMe + 2;
  clickMe= clickMe+2

});

var yolo = function() {
  score = score + (1*timeMe);

  scoreHtml.innerHTML = score;


}

var scoreN = setInterval(yolo, 1000);
