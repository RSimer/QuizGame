
var highscore = localStorage.getItem("highScore");

var HighScore = function(){

    prompt("I want your autograph for how good that score was!");

    scoreEl.innerHTML = "";

    if(highscore !== null){
        if (score > highscore) {
            localStorage.setItem("highscore", score);      
        }
    }
    else{
        localStorage.setItem("highscore", score);
    }
}