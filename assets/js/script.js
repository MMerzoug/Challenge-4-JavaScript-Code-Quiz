var container = document.getElementById("container");
var startQuiz = document.getElementById("start_quiz");
var quizBox = document.getElementById("quiz_box");
var title = document.getElementById("title");
var timerHolder = document.getElementById("timer_holder");
var timeLeft = document.getElementById("time_left");
var timerSec = document.getElementById("timer_sec");
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
var buttons = document.getElementById("buttons");
var restart = document.getElementById("restart");
var end = document.getElementById("end");
var current_question = document.getElementById("current_question");
var clear_content = document.getElementById("clear_content");


//Global variables should be positioned towards the top of the document because they can be used anywhere
let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

//When button is clicked, container will disappear and quiz box will appear
document.getElementById("start_quiz").addEventListener("click", function () {
  container.style.display = "none";
  quiz_box.style.display = "block";
  
  timeInterval= setInterval (function (){
    timeValue= timeValue-1;
    timer_sec.textContent= timeValue;
    if (timeValue <= 0) {
      // Handle the time-up scenario
      clearInterval(counter);
      timeValue = 30; // Reset the time value
      que_count = 0; // Reset the question count
      showQuestions(); // Restart the quiz
    }
  }, 1000)

  showQuestions();

});

function setNextQuestion() {
  resetState();
}

console.log(questions[0].question);

function showQuestions() {
  current_question.textContent = questions[que_count].question;

  // Remove previous options
  while (optionList.firstChild) {
    optionList.removeChild(optionList.firstChild);
  }

  for (let i = 0; i < questions[que_count].options.length; i++) {
    var newButton = document.createElement("button");
    newButton.textContent = questions[que_count].options[i];

    // use addEventListener
    newButton.onclick = function() {
      var answer = questions[que_count].answer;

      // check if answer is correct
      if (newButton.textContent === answer) {
        // decrement time
        timeValue -= 10;
      }
      nextQuestion();
    };
    optionList.appendChild(newButton);
  }
}

//Next Question... Look up
function nextQuestion() {
  que_count++;
  showQuestions();
  //What to do after ..
}

//All done. Enter Initials. Show Score

//highscores
