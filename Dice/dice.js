var random1=Math.random();
var random2=Math.random();
player1=Math.floor(random1*6)+1;
player2=Math.floor(random2*6)+1;

var image1= "/Dice/img/dice" + player1 +".png";
var image2= "/Dice/img/dice" + player2 +".png";



if(player1 > player2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}

else if(player1 < player2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}

document.querySelectorAll("img")[0].setAttribute("src","image1");
document.querySelectorAll("img")[1].setAttribute("src","image2");

