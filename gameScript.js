// gonna start with time becuase i can ctrl c and ctrl v that 


var timeEl = document.querySelector("#timer");
var secondsLeft = 90;
var questionNum = 0;

// start of the time function 


function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " scs left";

            if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to stop the test and send to scores screen
            timeContent();
            endTime();
            }

        }, 1000);
}

// tells the clock to be on the page
function timeContent() {
            timeEl.textContent = " ";
           
}


function endTime(){
        if (time === 0){
                document.querySelector("#").textContent = "very sorry, try again next time me boyo.";
        }
}
// end timer section

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------------------------------


//start of start quiz section

function start(){

        document.querySelector("#startScreen").style = "display: none;";
        document.querySelector("#start").style = "display: none;";
        document.querySelector("#question").style = "display: grid";
}

// Start of changing question
 function question(){

        quiz.innerHTML = quiz[questionNum];
 }



// inner.html = quiz[0]; allowance of moving to different question

function checkAnswer() {
        var playeranswer = click.target.value;
   if (playeranswer === quiz[questionNum].answer) {
           textContent = "Right!";
           time += 5;
   }
   else  textContent = "Nope!";
}














// begin quiz section randomization and maybe how to do it honestly idk

// variables and and wtf am I doing
var quiz = [

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


