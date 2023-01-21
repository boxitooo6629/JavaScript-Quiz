 //html elements
let questionsTag = document.getElementById("questions");

let timer = document.getElementById("time");

let questionTitle = document.getElementById("questions-title");

let questionChoises = document.getElementById("questions-choises");

let startButton = document.getElementById("start");

let submitButton = document.getElementById("submit");

let initialElement = document.getElementById("initials");

let feedBackElement = document.getElementById("feedback");

let sfx = new Audio("assets/sfx/correct.wav");


 

// var to keep track on time

let currentQuestionIndex = 0;
let time = questionsTag.lenght * 15;
let timerID;



function startQuiz() {
        let startScreenElement = document.getElementById("start-screen");
        startScreenElement.setAttribute("class", "hide");

        questionsElements.removeAttributes("class");

        timerID = setInterval(clockTick, 1000)

}

function timerLogic() {
    start.addEventListeners("start");
    let time = 100;
    let countdown = setInterval(function () {
        if(time === 0) {
            clearInterval(countdown)
        }
        timer.textContent = time
        time--

    },1000)
}
timerLogic()

function quizEnd(){
    clearInterval(timerID);

    let endScreenElement = document.getElementByID("end-screen");
    endScreenElement.removeAttributes("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");
}

function questionClick() {
    if(this.value != questions [currentQuestionIndex].answer) {
        time -= 15;
        if(time < 0) {
            time = 0;
        }
        timerElement.textContent = time;

        feedBackElement.textContent = "Wrong!"
    } else {
        sfxRight.play();
        feedBackElement.textContent = "Correct!";
    }

    feedBackElement.setAttribute("class", "feedback");
    
    setTimeout(function(){ 
        feedBackElement.setAttribute("class", "feedback hide")
    }, 1000);

    currentQuestionIndex++;

    if(currentQuestionIndex === questions.lenght) {
        quizEnd()
    } else {
        getQuestion();
    }
}

function highScore() {
    let initials = initialElement.value.trim();

    if(initials !== ""){
        let highScores = JSON.parse(localStorage.getItem("highscores")) || [] ;

        let newScore ={
            score: time,
            initials: initials
        }

    }
    highScore.push(newScore);
    localStorage.setItem("highscore", JSON.stringify(highScores));

    window.location.href = "highscore.html";

}

function checkForEnter(event){
    if(event.key === "Enter") {
        saveHighScore();

    }
}

function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choisesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceBotton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`

        choiceButton.addEventListeners("click", questionClick);

        choicesElement.append(choiceButton);

    
    })
}