
function populate(){
	if(quiz.isEnded()){
		showScores()
	}
	else{
		//Show Question

		var element=document.getElementById("question")
		element.innerHTML=quiz.getQuestionIndex().text;

		//Show Choices

		var choices=quiz.getQuestionIndex().choice;

		for (i=0;i<choices.length;i++){
			var element = document.getElementById("choice"+i)
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i])
		}
		showProgress()
	}
}

function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+1;
	var element=document.getElementById("progress");
	element.innerHTML= "Quesion "+ currentQuestionNumber +" of " + quiz.questions.length;
}

function guess(id,guess){
	var button=document.getElementById(id);
	button.onclick=function (){
		quiz.guess(guess);
		populate();
	}
}
function showScores(){
	var gameOverHtml="<h1>Result</h1>";
	gameOverHtml+="<h2 id='score'>Your Score is "+quiz.score+"</h2>";
	var element=document.getElementById("quiz");

	element.innerHTML=gameOverHtml
}

var questions=[
new Question("Which is not An Object Oriented Programming Language ? ", ["C","C++","Java","C"],"C"),
new Question("Which Language is Used for styling the webpages ? ", ["HTML","CSS","Java","Jquery"],"CSS"),
new Question("THere are _ main components in OOP Language ? ", ["1","2","3","4"],"4"),
new Question("Which Language is used for Web apps ? ", ["PHP","PYthon++","Java","All"],"All"),
new Question("Which is MVC ? ", ["Language","Library","Framework","All"],"Framework"),
]

var quiz= new Quiz(questions);

populate();