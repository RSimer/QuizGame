// turning the id's to var
var openerEl = document.querySelector("#opener");
var ShowMe = document.querySelector(".open");
var questionSec = document.querySelector("#questionHere");
var HideMe = document.querySelector(".peekaboo");
var startBtn = document.querySelector("#start");
var questionNum = 0;
var choices = document.querySelector("#questionList");
var score = 0;
var highScore = 0;
var scoreEl = document.querySelector("#score");





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
                timer = duration;
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
    var currentQuestion =  quizArray[questionNum];
    var TitleEl = document.querySelector("#questionTitle");
    TitleEl.textContent = currentQuestion.title
     choices.innerHTML = "";
     score.innerHTML = "";
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
    var choiceOption = document.querySelector(".choiceOption");
    var currentQuestion = quizArray[questionNum];
    var selectedAnswer = event.target.value;



   if (selectedAnswer === currentQuestion.answer){

   score = score +5;
   alert("right!");
    

   }
   else if (selectedAnswer !== currentQuestion.answer){
       score = score -5;
        alert("Wrong!");
   }
   currentQuestion.innerHTML = "";
    questionNum++;
    question();
    
    console.log(score);
    console.log(questionNum);
    console.log(currentQuestion.answer);
    console.log(currentQuestion.innerHTML);

}

if (quizArray[questionNum] === undefined){
    stop(question);
    highScore();
}



startBtn.addEventListener("click", start);
questionSec.addEventListener("click", checkAnswer);