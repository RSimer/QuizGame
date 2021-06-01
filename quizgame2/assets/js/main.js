// turning the id's to var
var openerEl = document.querySelector("#opener");
var ShowMe = document.querySelector(".open");
var questionSec = document.querySelector("#questionHere");
var HideMe = document.querySelector(".peekaboo");
var startBtn = document.querySelector("#start");
var questionNum = 0;
var choices = document.querySelector("#questionList");





// actual click to make it happen
function start (){
    openerEl.style = "display: none;";
    question();
    
}

// timer section with activation of start funciton



    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                
            }
        }, 1000);
    }
    
    window.onload = function () {
        var fiveMinutes = 90,
            display = document.querySelector('#timer');
        startTimer(fiveMinutes, display);
        display.setAttribute("style", "position: ")
    };




// change from start screen to questions

function question(){
// title not working??? 
    var currentQuestion =  quizArray[questionNum];
    var TitleEl = document.querySelector("#questionTitle");
    TitleEl.textContent = currentQuestion.title
     choices.textContent = "";
     console.log(TitleEl.textContent);
     for(i = 0; i<currentQuestion.choices.length; i++){
             var choiceOption  = document.createElement("button");
             choiceOption.setAttribute("class", "choice");
             choiceOption.setAttribute("style", "background-color: blue; color: white; font-size: 15px; padding: 10px;")
             choiceOption.setAttribute("value", currentQuestion.choices[i]);
             choiceOption.textContent = currentQuestion.choices[i];
             choices.appendChild(choiceOption);
             choiceOption.onclick = checkAnswer;
             choiceOption.onclick = console.log(choiceOption.value);
     }
}


function checkAnswer(){

    // don't quite know how to give the click value
    for(var i=0; i<4; i++)
    link.onclick();

}



function scores(){

    choices.style = "display: none;";
    TitleEl.style = "display: none;";

    highscores();

}






startBtn.addEventListener("click", start);
document.addEventListener("click", checkAnswer);