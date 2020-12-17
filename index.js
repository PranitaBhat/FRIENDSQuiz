var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

var userName = readlineSync.question("Hey! What's your name? ");
log(chalk.green.bold("Hi " + userName + "! "));
log(chalk.bold('Welcome to my F' + chalk.redBright('.') + 'R' + chalk.yellowBright('.') + 'I' + chalk.blueBright('.') + 'E' + chalk.redBright('.') + 'N'+ chalk.yellowBright('.') + 'D' + chalk.blueBright('.') + 'S Fan Quiz!'));
log(chalk.italic.cyanBright.bold("FRIENDS is not just a series, it's an emotion!"));
log(chalk.blue.bgYellowBright.bold("Are you the greatest fan? Let's find out!"));
log(chalk.redBright.bold.underline("GOOD LUCK"));
console.log("------------------------------------------");

var questions = [
  {
  question : "What was Rachel's First Fiance's first name? ",
  answer : "BARRY"
  },

  {
  question : "How many times was Ross divorced? (Answer in word, not number!) ",
  answer : "THREE"
  },

  {
    question : "What is Ross's son's first name? ",
    answer : "BEN"
  },

  {
    question : "Who was Chandler's annoying recurring girlfriend? (First name only) ",
    answer : "JANICE"
  },

  {
    question : "How many babies did Phoebe deliver for her brother? (Answer in word, not number!) ",
    answer : "THREE"
  },

// levelTwoQuestions
  
  {
  question : "Who was Monica's first kiss ever? ",
  answer : "ROSS"
  },

  {
  question : "What is the first name of Phoebe's twin sister? ",
  answer : "URSULA"
  },

  {
    question : "Who was the first friend to know about Monica and Chandler's relationship? ",
    answer : "JOEY"
  },
//levelThreeQuestions
  {
    question : "How many sisters does Joey have? (Answer in word, not number!) ",
  answer : "SEVEN"
  },

  {
    question : "Who got Emma's ears pierced? (First name only!) ",
    answer : "AMY"
  }
];

var score = 0;

var highScore = [
  {
    name : "Shashank",
    score : 10,
  },
  {
    name : "Nishanth",
    score : 7,
  },
  {
    name : "Varun",
    score : 9,
  }
];

function play(ques, ans)
{
  if (ans.toUpperCase() === questions[i].answer){
    var result = "YAY!";
    score = score+1;
  }
  else{
    var result = "NAY!";
  }
return result;
}

for (var i=0;i<questions.length;i++)
{
  switch(i)
  {
    case 0:
    console.log("You're at Level 1. All the best!");
    console.log("********************************");
    break;

    case 5:
    console.log("You're now at Level 2. Keep going!");
    console.log("********************************");        
    break;

    case 8:
    console.log("Almost there! Level 3!!!");
    console.log("********************************");
    break;
  }
  var userAnswer = readlineSync.question(questions[i].question);
  var result = play (questions[i].question, userAnswer);
  console.log (result);
  console.log ("Your current score is ",score);
  console.log ("--------------------------");
}

console.log("*********************************");
console.log("*********************************");
console.log("*********************************");
console.log("Your final score is -----> ", score);
console.log("Here are the top FRIENDS fans : ");
for (var j=0; j<highScore.length; j++)
{
  console.log(highScore[j].name + " : " + highScore[j].score);
}
console.log("*********************************");
console.log("*********************************");
console.log("*********************************");

if(score>6)
{
  console.log("Congratulations! You breathe FRIENDS!");

  console.log("If your final score matches or is better than these high scores, send me a screenshot of your result and I will update it here!");
  console.log("Thank you for playing my quiz!!!");
  console.log("<3 <3 <3");
}
else
{
  console.log("Well tried! But you can do better!");
  console.log("Thank you for playing my quiz!!!");
  console.log("<3 <3 <3");
}
