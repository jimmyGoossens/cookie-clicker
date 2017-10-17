var image = document.getElementById("image");

var score = 0;
var timeMe = 1;
var clickMe = 1;
var price = 50;

var scoreHtml = document.getElementById("scoreHtml");
var multi = document.querySelector(".me");


image.addEventListener("click", function() {


  score = score + (1 * clickMe);

  scoreHtml.innerHTML = score;


});

multi.addEventListener("click", function() {
  if (score >= price) {
    score = score - price;
    price = Math.round(price * 5);
    timeMe = timeMe * 2;
    clickMe = clickMe * 2;

  } else {
    alert("you don't have enought cookies!!!");
  }
});

var yolo = function() {
  score = score + (1 * timeMe);

  scoreHtml.innerHTML = score;


}

var scoreN = setInterval(yolo, 1000);
