function rollDice(){
var randomnumber1 = Math.floor(Math.random() * 6)+1;
var randomimage = "dice" + randomnumber1 + ".png";
var randomimagesource = "./images/" + randomimage;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomimagesource);

var randomnumber2 = Math.floor(Math.random() * 6)+1;
var randomimage = "dice" + randomnumber2 + ".png";
var randomimagesource = "./images/" + randomimage;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource);
const myheading = document.querySelector('h1');

if(randomnumber1 > randomnumber2){
    myheading.textContent = "Player 1 Wins 🚩" ;
}
else if(randomnumber2 > randomnumber1){
    myheading.textContent = "Player 2 wins 🚩";
}
else{
    myheading.textContent = "Draw !";
}
}