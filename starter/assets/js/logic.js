var questionsTag = document.getElementById("questions")

var timer = document.getElementById("time")

var questionTitle = document.getElementById("questions-title")

var questionChoises = document.getElementById("questions-choises")



var startButton = document.getElementById("start")


startButton.addEventListener("click", function (evt)  {
    evt.preventDefault()
    startScreen.setAttribute("class", "hide")
    displayQuestion()
} )

function displayQuestion() {


}

function timerLogic() {

    var time = 100
    var countdown = setInterval(function () {
        if(time === 0) {
            clearInterval(countdown)
        }
        timer.textContent = time
        time--

    },1000)
}
timerLogic()