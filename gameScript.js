// gonna start with time becuase i can ctrl c and ctrl v that 


var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

// start of the time function 


function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " scs left";

            if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to stop the test and send to scores screen
            stop();
            }

        }, 1000);
}

// stop the test altogether
function stop() {
            timeEl.textContent = " ";
            var btn = $(".question");
            btn[0].onclick = false;
}

setTime();
// end timer section

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// begin quiz section randomization and maybe how to do it honestly idk

// variables and and wtf am I doing
var quiz = [];
            quiz[0] = new Question();
            quiz[1] = new Question();
            quiz[2] = new Question();
            quiz[3] = new Question();
            quiz[4] = new Question();
            quiz[5] = new Question();
            quiz[6] = new Question();
            quiz[7] = new Question();
            quiz[8] = new Question();
            quiz[9] = new Question();
            quiz[10] = new Question();

var randomQuestion;
var answers = [];
var currentScore = 0;
        shuffle(quiz);
        console.log(quiz);

// this will suffle the quiz array... yeah
function shuffle(quiz) {
        var currentIndex = quiz.length, temp, randomIndex;
        while (0 !== currentIndex) {


            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex = 0;

            temp = quiz[currentIndex];
            quiz[currentIndex] = quiz [randomIndex];
            quiz[randomIndex] = temp;

    }
}
// end randomization/shuffle section


// ------------------------------------------------------------------------------------------------------------------------------------------------------------


