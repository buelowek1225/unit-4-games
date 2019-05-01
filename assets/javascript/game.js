// //create "alert"
// alert("hi");

//variables
var score = 0;
var losetotal = 0;
var wintotal = 0;
//randomize targetNumber
var targetNumber = Math.floor(Math.random() * 101)+ 19;
var randone = Math.floor(Math.random() * 11)+ 1;
var randtwo = Math.floor(Math.random() * 11)+ 1;
var randthree = Math.floor(Math.random() * 11)+ 1;
var randfour = Math.floor(Math.random() * 11)+ 1;
// console.log(randone, randtwo, randthree, randfour);


// function to alert win or lose based on sore and add point for win or lose
function statuschecker() {
    if (score === targetNumber) {
        alert("You win!");
        wintotal++;
        $("#wincounter").text(wintotal);
        reset();
    } else if (score > targetNumber) {
        alert("You lose!!")
        losetotal++;
        $("#losecounter").text(losetotal);
        reset();
    }
}

// function to reset all values
function reset() {
    score = 0;
    $("#yourscore").text(score);
    targetNumber = Math.floor(Math.random() * 101)+ 19;
    $("#number-to-guess").text(targetNumber);
    randone = Math.floor(Math.random() * 11)+ 1;
    randtwo = Math.floor(Math.random() * 11)+ 1;
    randthree = Math.floor(Math.random() * 11)+ 1;
    randfour = Math.floor(Math.random() * 11)+ 1;
    while(randone === randtwo){
        randtwo = Math.floor(Math.random() * 11)+ 1;
    }
    while(randone === randthree || randtwo === randthree){
        randthree = Math.floor(Math.random() * 11)+ 1;
    }
    while(randone === randfour || randtwo === randfour || randthree === randfour){
        randfour = Math.floor(Math.random() * 11)+ 1;
    }
    console.log(randone, randtwo, randthree, randfour);
    console.log("works");
}



while(randone === randtwo){
    randtwo = Math.floor(Math.random() * 11)+ 1;
}

// using ||=or I can compare randone to randthree and randtwo to randthree
while(randone === randthree || randtwo === randthree){
    randthree = Math.floor(Math.random() * 11)+ 1;
}

while(randone === randfour || randtwo === randfour || randthree === randfour){
    randfour = Math.floor(Math.random() * 11)+ 1;
}
console.log(randone, randtwo, randthree, randfour);

// console.log(numberOptions);

//set starting win/losecounter to zero
$("#losecounter").text(losetotal);
$("#wincounter").text(wintotal);
$("#yourscore").text(score);
$("#number-to-guess").text(targetNumber);

// //set 'Number to Guess' to match 'targetNumber'
// $("#number-to-guess").text(targetNumber);

// Here I create an on-click event that responds to button clicks of the crystal images.
$(".redcrysimage").on("click", function() {
    score += randone;
    $("#yourscore").text(score);
    statuschecker()
    console.log(score);
});
$(".orangecrysimage").on("click", function() {
    score += randtwo;
    $("#yourscore").text(score);
    statuschecker()
    console.log(score);
});

$(".bluecrysimage").on("click", function() {
    score += randthree;
    $("#yourscore").text(score);
    statuschecker()
    console.log(score);
  });

$(".purplecrysimage").on("click", function() {
    score += randfour;
    $("#yourscore").text(score);
    statuschecker()
    console.log(score);
});

// if my total score is equal to guess value - alert you win and reset, add to win value
// if my total score is greater than guess value - alert you lose and rest add to loses 
