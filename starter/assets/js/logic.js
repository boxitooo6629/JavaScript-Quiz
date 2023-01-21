 //html elements


let timerElement = document.getElementById("time");

let questionTitle = document.getElementById("questions-title");

let choisesElement = document.getElementById("choices");

let startButton = document.getElementById("start");

let submitButton = document.getElementById("submit");

let initialElement = document.getElementById("initials");

let feedBackElement = document.getElementById("feedback");

let sfxCorrect = new Audio("assets/sfx/correct.wav");

let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");


 

// var to keep track on time

let currentQuestionIndex = 0;
//let time = questionsTag.lenght * 15;
let timerID;
let time = 100;
let questionsTag = document.getElementById("questions");


function quizEnd(){
    debugger;
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsTag.setAttribute("class", "hide");
}

function clockTick(){
    time--;
    timerElement.textContent = time;
    if(time <=0){
        quizEnd();
    }
}

function questionClick() {
    if(this.value !== questions [currentQuestionIndex].answer) {
        time -= 15;
        if(time < 0) {
            time = 0;
        }
        timerElement.textContent = time;
        sfxIncorrect.play()
        feedBackElement.textContent = "Wrong!"


    } else {
        time += 15;
        sfxCorrect.play();
        feedBackElement.textContent = "Correct!";
    }

    feedBackElement.setAttribute("class", "feedback");
    
    setTimeout(function(){ 
        feedBackElement.setAttribute("class", "feedback hide")
    }, 1000);

    currentQuestionIndex++;
      debugger;
    if(currentQuestionIndex === 5) {
        debugger;
        quizEnd()
    } else { debugger;
        getQuestion();
    }
}

function getQuestion(){
    

    let currentQuestion = questions[currentQuestionIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choisesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");
        
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index + 1}. ${choice}`

        choiceButton.addEventListener("click", questionClick);

        choisesElement.append(choiceButton);

    
    })
}

function startQuiz() {
        
    let startScreenElement = document.getElementById("start-screen");
        startScreenElement.setAttribute("class", "hide");
         debugger;
        questionsTag.removeAttribute("class");

        timerID = setInterval(clockTick, 1000);
        
        timerElement.textContent = time;
        getQuestion();
}
startButton.addEventListener('click', startQuiz)



function highScore() {
    let initials = initialElement.value.trim();
    debugger;
    if(initials !== ""){
        let highScores = JSON.parse(localStorage.getItem("highscores")) || [] ;

        let newScore ={
            score: time,
            initials: initials
        }

    }
    highScore.push(newScore);
    localStorage.setItem("highscore", JSON.stringify(highScore));

    window.location.href = "highscore.html";

}

function checkForEnter(event){
    if(event.key === "Enter") {
        saveHighScore();

    }
}

submitButton.addEventListener("click", highScore);
initialElement.addEventListener("keyup", checkForEnter);
