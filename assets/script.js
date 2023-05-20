var container = document.getElementById ("container");
var startQuiz = document.getElementById ("start_quiz");
var timerHolder = document.getElementById("timer_holder");
var scoreHolder = document.getElementById("score_holder");
var questionContainer1 = document.getElementById("question_container_1");
var questionContainer2 = document.getElementById("question_container_2");
var questionContainer3 = document.getElementById("question_container_3");
var questionContainer4 = document.getElementById("question_container_4");
var questionContainer5 = document.getElementById("question_container_5");
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
    questionContainer1.style.display = "block";
});

