function highScore() {

    let highScore = JSON.parse(localStorage.getItem("highscores")) || [];

    highScore.sort(function(a, b) {
        return b.score - a.score;
    })

    highScore.forEach(function(score){
        
        let li = document.createElement("li");
        li.textContent = `${score.initials} - ${score.score}`
        let ol = document.getElementById("highscores");
        ol.appendChild(li);
    })
        
    }



function removeHighScore() { 
    localStorage.removeItem("highscores"); 
    let scores = document.getElementById("highscores");
    scores.innerHTML=""
}

let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", removeHighScore);



highScore();