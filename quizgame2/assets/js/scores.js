var points = document.querySelector("#highScore");

function highscores(){

    scoreEl.textContent = points;
    
}

localStorage.getItem("quizArray", JSON.stringify(quizArray));