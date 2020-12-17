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
