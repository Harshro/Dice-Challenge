// creating a random number for dice
var randomNumber1 =Math.floor(Math.random () *6) +1;

// creating a random dice image with concatenation(+randomnumber 1 is concatenation)
var randomDiceImage = "dice" + randomNumber1 + ".png";

// location for the images
var randomImageSource1 = "images/" + randomDiceImage;

//  i am trying to write one line code for line 5 and 8
//  var randomDiceImage = "images/" + randomNumber1 + ".png"

var image1 = document.querySelectorAll("img") [0];
// in the brackets  (the first value will be for what we need to change so we are changing here src, in second what we want to change to.)
image1.setAttribute("src", randomImageSource1);


// creating the function for dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);



// showing winner of the game 
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Match Draw!";
}