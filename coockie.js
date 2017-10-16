
var image = document.getElementById("image");

var score = 0;
var scoreHtml = document.getElementById("scoreHtml");


image.addEventListener("click",function(){
   
    
    score = score +1;
    
    scoreHtml.innerHTML= score;

    
});


    
    
