
	// These are my variables for my timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = 10;
// this is the funtion of the timer, it should start at 10 then count backwards to 0.
function setTime() {

	// Sets interval in variable
	var timerInterval = setInterval(function() {
	  secondsLeft--;
	  timeEl.textContent = secondsLeft + "";
  
	  if(secondsLeft === 0) {
		// Stops the action at the set interval
		clearInterval(timerInterval);
		// Calls function to create and append points
		sendMessage();
	  }
  
	}, 1000);
 
  
  }
  
  setTime();

	
	// These are the funtions for correct and incorrect asnwers.
	function check(){
    
    var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
    



	if (question1 == "Ignores the statement") {
		correct++;
}
	if (question2 == "declaration statements") {
		correct++;
}	
	if (question3 == "Function/Method") {
		correct++;
	}
	


	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}
	

//  start quiz with timer and set up questions
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

}
    

	}
	