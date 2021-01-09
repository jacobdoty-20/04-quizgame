
console.log(document.body);
// var timer = 75;
// function gameTimer(){
//     const minutes = Math.floor(time * .06);
//     let seconds = time % 60;
//     gameTimeEl.textContent = seconds;
//     time--;

//     if (time <= 0){
//         time=0;
//         clearInterval(timer);
        
//     }
// }

var gameStart = document.getElementById("#startBtn");
// gameStart.addEventListener("click", function(){
//     var timer = setInterval(gameTimer, 1000);
//     timer--;
// })
var timeEl = document.querySelector(".timeLeft");
var secondsLeft = 75;

// function setTime() {
  // Sets interval in variable
  gameStart.addEventListener("click", function(){
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      timeLeft = 0;
    }

  }, 1000);
});


// gameStart.addEventListener("click", setTime());
// console.log(startBtn)

var qList = [{
    question: "This actor stars in the 2001 film The Fast and the Furious",
    options: ["Michael Chiklis", "Jason Statham", "Vin Diesel", "Bruce Willis"],
    correctAns: "Vin Diesel"
},
{
    question: "This actor stars in the 2002 film The Bourne Identity",
    options: ["Ben Affleck", "Matt Damon", "Jeremy Renner", "Tom Cruise"],
    correctAns: "Matt Damon"
}]