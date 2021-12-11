var readlineSync=require("readline-sync");
var userName=readlineSync.question("Enter Your name ");
console.log("Welcome "+userName+" do you know Monika");
var score=0


function play(question,answer)
{
  var userAnswer=readlineSync.question(question);

  if (userAnswer === answer)
  {
    console.log("You are right");
    score=score+1;
    
  } else
  {
     console.log("You are wrong");
     score=score-1;

  }
  console.log("Your Current Score is "+score);
  console.log("#####################")
}
var questions=[{
  question:"Am I older than 25",
  answer:"yes"
}, 
{
  question:"Where do I live? ",
  answer:"bangalore"
},
{
  question:"My favourite superhero? ",
  answer:"superman"
},
{
  question:"My favourite colour? ",
  answer:"blue"
}];
//loops

for(var i=0; i<questions.length;i++)
{ 
  var currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
var finalScore=score
console.log("Your final score is out of 4 is ",finalScore)