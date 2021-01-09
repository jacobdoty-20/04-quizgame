
var timer = 75;
function gameTimer(){
    const minutes = Math.floor(time * .06);
    let seconds = time % 60;
    gameTimeEl.textContent = seconds;
    time--;

    if (time <= 0){
        time=0;
        clearInterval(timer);
        
    }
}

var gameStart = document.getElementById("#startBtn");
gameStart.addEventListener("click", function(){
    timer = setInterval(gameTimer, 1000)
})

document.body.getElementById("#startBtn").addEventListener("click", console.log());
// console.log(startBtn)

var qList = [{
    question1: "This actor stars in the 2001 film The Fast and the Furious",
    options: ["Michael Chiklis", "Jason Statham", "Vin Diesel", "Bruce Willis"],
    correctAns: "Vin Diesel"
},
{
    question2: "This actor stars in the 2002 film The Bourne Identity",
    options: ["Ben Affleck", "Matt Damon", "Jeremy Renner", "Tom Cruise"],
    correctAns: "Matt Damon"
}]