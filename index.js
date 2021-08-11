const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const chalk = require('chalk');
console.log("Welcome to the fights of the century ..Quiz on Muhammad Ali");
const quiz =[{
  question:(chalk.yellow)
  `what year was Ali born?
   a:1950
   b:1942
   c:1940\n`,
     answer:"b"
},
{
  question:(chalk.yellow)
  `in what year Ali win a gold medal at the olympics?
   a:1960
   b:1964
   c:1968\n`,
     answer:"a"

},
{
  question:(chalk.yellow)
  `how many times Ali fights Joe frazier?
   a:1
   b:2
   C:3\n`,
     answer:"c"
}
];

let quizIndex =0;

function play(){
  rl.question(quiz[quizIndex].question, (answer) =>{
    if(answer.toLowerCase() == quiz[quizIndex].answer.toLowerCase())
    {
      console.log(chalk.green("yay you  are  greatest fan "));
      quizIndex++;
      play1();
    }
    else{
      console.log(chalk.cyan("you Knock down"));
       console.log(chalk.cyan("one..two..seven let's play again"));

      play();
    }
  });
}

function play1(){
  if(end()){
    console.log(chalk.cyan("thnx for playing"));
    rl.close();
  }else
  {
    rl.question("press a to continue...any other to exit", (choice) =>{
      if(choice.toLowerCase() =="a")
      {
        play();
      }
      else
      {
        console.log(chalk.cyan("thnx for playing"));
        rl.close();
      }
    });
  }
}
function end(){
  if(quiz.length == quizIndex)
  {
    return true;
  }
}
play1();