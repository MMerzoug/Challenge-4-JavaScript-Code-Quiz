// Get references to HTML elements
var container = document.getElementById("container");
var startQuiz = document.getElementById("start_quiz");
var quizBox = document.getElementById("quiz_box");
var timerSec = document.getElementById("timer_sec");
var queText = document.getElementById("que_text");
var optionList = document.getElementById("option_list");
var allDone = document.getElementById("all_done");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highscoresForm = document.getElementById("highScores");
var allScores = document.getElementById("all_scores");
var goBack = document.getElementById("go_back");
var clearHighscores = document.getElementById("clear_highscores");
var restart = document.getElementById("restart");
var current_question = document.getElementById("current_question");
var finalScore = document.getElementById("final_score");
var score = 0;
var scoreArray = JSON.parse(localStorage.getItem('score')) || [];

//Ensure global variables are at the beginning of the code
let timeValue = 90;
let que_count = 0;
let que_numb = 1;
let timeInterval;
let widthValue = 0;

// Event listener for submit button
document.getElementById("submit").addEventListener("click", function() {
  event.preventDefault();
  allDone.style.display = "none";
  highscoresForm.style.display = "block";

  // Make sure the buttons are visible
  goBack.style.display = "block";
  clearHighscores.style.display = "block";

  // Retrieve scores from local storage
  var scores = JSON.parse(localStorage.getItem('score')) || [];
  var initialsValue = initials.value;

  // Build a string of scores with initials
  var scoreString = "";
  for (var i = 0; i < scores.length; i++) {
    scoreString += "Initials: " + initialsValue + " - Score: " + scores[i] + "<br>";
  }

  // Set the innerHTML of the <p> element to the scores string
  allScores.innerHTML = scoreString;
});

// Function to handle moving to the next question
function nextQuestion() {
  que_count++;
  if (que_count >= questions.length) {
    moveOn();
    clearInterval(timeInterval);
  } else {
    showQuestions();
  }
}

// Function to display the questions and options
function showQuestions() {
  current_question.textContent = questions[que_count].question;

  // Remove any existing options in the optionList
  while (optionList.firstChild) {
    optionList.removeChild(optionList.firstChild);
  }

  // Iterate over the options for the current question and create buttons
  for (let i = 0; i < questions[que_count].options.length; i++) {
    // Create a new button for each option
    var newButton = document.createElement("button");
    newButton.textContent = questions[que_count].options[i];

    // Add an event listener to the button
    newButton.addEventListener('click', function(event) {
      event.preventDefault();
      var answer = questions[que_count].answer;

      // Check if the selected option is the correct answer
      if (event.target.textContent !== answer) {
        // Decrease the time value by 10 for wrong answer
        timeValue -= 10;
        if (timeValue <= 0) {
          // If time is up, stop the interval and move on to the next step
          clearInterval(timeInterval);
          moveOn();
        }
      } else {
        // Increase the score by 10 for a correct answer
        score += 10;
      }

      // Move to the next question
      nextQuestion();
    });
    // Append the new button to the optionList
    optionList.appendChild(newButton);
  }
}



// Function to handle moving on after completing the quiz
function moveOn() {
  quizBox.style.display = "none";
  allDone.style.display = "block";
  highscoresForm.style.display = "none";
  // Set the content of the finalScore element to display the final score
finalScore.textContent = "Your final score is " + score;

// Reset the finalScore variable to an empty array
finalScore = [];

// Push the score to the scoreArray
scoreArray.push(score);

// Store the scoreArray in the local storage as a JSON string
localStorage.setItem('score', JSON.stringify(scoreArray));

}

// Event listener for start quiz button
// Intentionally at the end of the code. If at the beginning it will call the click function before what it is supposed to do is defined
document.getElementById("start_quiz").addEventListener("click", function() {
  container.style.display = "none";
  quizBox.style.display = "block";

// Set up a setInterval function to decrement the time value every second
// and check if the time is up
timeInterval = setInterval(function() {
  // Decrease the time value by 1
  timeValue -= 1;

  // Check if the time is less than 0, indicating time is up
  if (timeValue < 0) {
    // Stop the interval
    clearInterval(timeInterval);
    // Move on to the next step after completing the quiz
    moveOn();
  }

  // Update the timer display with the current time value
  timerSec.textContent = timeValue;
}, 1000);


  showQuestions();
});

// Event listener for restart button
restart.addEventListener("click", function() {
  location.reload();
});

// Event listener for go back button
goBack.addEventListener("click", function() {
  highscoresForm.style.display = "none";
  container.style.display = "block";
});

// Event listener for clear highscores button
clearHighscores.addEventListener("click", function() {
  localStorage.removeItem('score');
  allScores.innerHTML = "";
});
