var container = document.getElementById("container");
var startQuiz = document.getElementById("start_quiz");
var timerHolder = document.getElementById("timer_holder");
var scoreHolder = document.getElementById("score_holder");
var quizBox = document.getElementById("quiz_box");
var answerContainer = document.getElementById("answer_container");
var allDone = document.getElementById("all_done");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highScores = document.getElementById("highscores");
var score = document.getElementById("score");
var goBack = document.getElementById("go_back");
var clearHighscores = document.getElementById("clear_highscores");

//When button is clicked, container will disappear and quiz box will appear
document.getElementById("start_quiz").addEventListener("click", function () {
    container.style.display = "none";
    quiz_box.style.display = "block";
});

