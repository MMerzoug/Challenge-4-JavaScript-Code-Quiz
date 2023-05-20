var container = document.getElementById ("container");
var startQuiz = document.getElementById ("start_quiz");
var timerHolder = document.getElementById("timer_holder");
var scoreHolder = document.getElementById("score_holder");
var questionContainer = document.getElementById("question_container");
var answerContainer = document.getElementById("answer_container");
var allDone = document.getElementById("all_done");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highScores = document.getElementById("highscores");
var score = document.getElementById("score");
var goBack = document.getElementById("go_back");
var clearHighscores = document.getElementById("clear_highscores");

document.getElementById("start_quiz").addEventListener("click", function(){
    container.style.display = "none";
});

