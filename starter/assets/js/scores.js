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
    let ol = document.getElementById("highscores");
    ol.appendChild(li);
}

let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", removeHighScore);



highScore();