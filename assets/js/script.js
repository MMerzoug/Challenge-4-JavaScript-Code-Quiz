var container = document.getElementById("container");
var startQuiz = document.getElementById("start_quiz");
var quizBox = document.getElementById("quiz_box");
var title = document.getElementById("title");
var timerHolder = document.getElementById("timer_holder");
var timeLeft = document.getElementById("time_left");
var timerSec = document.getElementById("timer_sec");
var timeLine = document.getElementById("time_line");
var queText = document.getElementById("que_text");
var optionList = document.getElementById("option_list");
var totalQue = document.getElementById("total_que");
var nextButton = document.getElementById("next_button");
var scoreHolder = document.getElementById("score_holder");
var answerContainer = document.getElementById("answer_container");
var allDone = document.getElementById("all_done");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highScores = document.getElementById("highscores");
var score = document.getElementById("score");
var goBack = document.getElementById("go_back");
var clearHighscores = document.getElementById("clear_highscores");
var buttons = document. getElementById("buttons");
var restart = document. getElementById("restart");
var end = document. getElementById("end");

//When button is clicked, container will disappear and quiz box will appear
document.getElementById("start_quiz").addEventListener("click", function () {
    container.style.display = "none";
    quiz_box.style.display = "block";
    // showQuestions(0);
    // queCounter(1);
    // startTimer(30);
    // startTimerLine(0);
});

let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

document.getElementIdBy("all_done").addEventListener("click", function (){
    quiz_box.style.display = "none";
    all_done.style.display = "block";
});
