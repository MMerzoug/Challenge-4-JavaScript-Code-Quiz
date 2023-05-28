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
var finalScore = document.getElementById("final_score");
var score = 0;
var allScores= document.getElementById("all_scores");

//Global variables should be positioned towards the top of the document because they can be used anywhere
let timeValue = 90;
let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let widthValue = 0;

//highscores
// Add function to the score element from finslScore
// local Storage stuff
document.getElementById("submit").addEventListener("click", function() {
  allDone.style.display = "none";
  highscores.style.display = "block";
  // allScores.textContent= local
});

console.log (highscores);

//Cannot have the same name for a function and a variable
//All done. Enter Initials. Show Score
function moveOn(){
  quizBox.style.display = "none";
  allDone.style.display = "block"; 
  finalScore.textContent= "Your final score is " + score;
  finalScore= [];
  localStorage.setItem('score', JSON.stringify(scoreArray));
}

function setNextQuestion() {
  resetState();
}

// var allDone= JSON.parse
// (localStorage.getItem("all_done").stingify);
// if (!)

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
    optionList.onclick = function(event) {
      event.preventDefault()
      var answer = questions[que_count].answer;
    console.log (event.target.textContent);

      // check if answer is correct
      if (event.target.textContent !== answer) {
        // decrement time
        timeValue -= 10;
      if (timeValue <=0){
        clearInterval(timeInterval);
        moveOn ();
      }
      }else {
        score = score + 10;
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
  if (que_count >=4){
    moveOn ();
}
}

//When button is clicked, container will disappear and quiz box will appear
document.getElementById("start_quiz").addEventListener("click", function () {
  container.style.display = "none";
  quiz_box.style.display = "block";
  

  timeInterval= setInterval (function (){
    timeValue= timeValue -1;
    //If time value is greater than 0 it passes the test
    if (timeValue < 0) {
      // Handle the time-up scenario
      clearInterval(timeInterval);//Reset back to zero
      moveOn ();
    }
    //Then if passed test, display time value on the scrren
    timer_sec.textContent= timeValue;
  }, 1000)
  showQuestions();
});