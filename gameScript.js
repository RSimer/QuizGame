// gonna start with time becuase i can ctrl c and ctrl v that 


var timeEl = document.querySelector("#timer");

var secondsLeft = 15;

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
            endTime();
            }

        }, 1000);
}

// stop the test altogether
function stop() {
            timeEl.textContent = " ";
           
}


function endTime(){
        if (time === 0){
                document.querySelector("#").textContent = "";
        }
}
// end timer section

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// begin quiz section randomization and maybe how to do it honestly idk

// variables and and wtf am I doing
var quiz = [

        {
                title: "",
                choices: [],
                answer: ""

        },
];

// end randomization/shuffle section

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// Start of IF answer is right or wrong


// inner.html = quiz[0]; allowance of moving to different question