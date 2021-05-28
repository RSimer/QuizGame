// gonna start with time becuase i can ctrl c and ctrl v that 

var startButton = document.querySelector("#start")
var timeEl = document.querySelector(".timer");
var time = 90;
var questionNum = 0;
var choices = document.querySelector("#quizArray")

// start of the time function 


function setTime() {
        var timerInterval = setInterval(function() {
            timeEl.textContent = time + " scs left";
            time.setAttribute("style", "font-size: 20px;", "color: black");

            if(time <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timeContent();
            } else{

                time--;
            }
        }, 1000);
}



      
// tells the clock to be on the page
function timeContent() {
            timeEl.textContent = "";
            var ScoreCard = document.getElementById(".timer")
            timeEl.appendChild(ScoreCard)
           
}



// end timer section

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------------------------------


//start of start quiz section

function start(){

        document.querySelector("#startScreen").style = "display: none;";
        document.querySelector("#start").style = "display: none;";

        question();
        checkAnswer();
}

// Start of changing question
 function question(){

       var currentQuestion =  quizArray[questionNum];
       var TitleEl = document.querySelector("#QuestionTitle");
       TitleEl.textContent = currentQuestion.title
        choices.textContent = "";
        for(i = 0; i<currentQuestion.choices.length; i++){
                var choiceOption  = document.createElement("button");
                choiceOption.setAttribute("class", "choice");
                choiceOption.setAttribute("value", currentQuestion.choices[i]);
                choiceOption.textContent = currentQuestion.choices[i];
                choices.appendChild(choiceOption);
                choiceOption.onclick = checkAnswer;
                choiceOption.onclick = console.log(choiceOption.value);
        }
}



// inner.html = quiz[0]; allowance of moving to different question

function checkAnswer() {
        if (this.value !== quizArray[questionNum].answer){
                time -= 5;
                next;
        }
      else { 
              time +=5;
              next;
}
        function next(){
              currentQuestion[1];
        }

}














// begin quiz section randomization and maybe how to do it honestly idk

// variables and and wtf am I doing
var quizArray = [

        {
                title: "Am I going to pass this class",
                choices: ["yes", "no" ,"eh, probably", "not this one"],
                answer: "eh, probably"

        },
       
        {
                title: "when using an excel function, whats the worst way to get the square root of a number",
                choices: ["sqrt", "^.05" ,"#/#", "There is no worst way, also this is a coding class"],
                answer: "^.05"

        },

        {
                title: "Whats the capital of Taiwan" ,
                choices: ["Taipei", "Bangkok", "New Taipei City", "Tainan City"],
                answer: "Taipei"

        },
        {
                title: "a function does not work without:",
                choices: ["brackets", "curly brackets", "back-ticks", "Parentheses"],
                answer: "Parentheses"

        },
        {
                title: "what element number is Helium" ,
                choices: ["1","2","3","4"],
                answer: "2"

        },
];




startButton.addEventListener("click", start);
document.addEventListener("click", quizArray);