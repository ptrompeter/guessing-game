
//global variables
var numOfQs;
var qNumArray = [];
var name;
var tv;  
var job;  
var age;  
var pet; 
var counter = 0;
var wrongAnswer = [];
var checkNum;

//declaring functions

function qNumber(){
  numOfQs = parseInt(prompt("How many questions do you want? Choose a number less than or equal to 7."));
  if (!(numOfQs > 0 && numOfQs <= 7)){
    alert("Please select an interger greater than 0 and less than 8.");
    qNumber();
  } 
}
function repeatChecker(){
  for (var i = 0; i < qNumArray.length; i++){
    if (checkNum === qNumArray[i]){
      return true;
    }
  }
}
function qArrayMaker() {
  while (qNumArray.length < numOfQs){
    checkNum = Math.ceil(Math.random() * 7);
      if(!repeatChecker()){
        qNumArray.push(checkNum);
      }
  }
}
function gameFunc(array) {
  for (i = 0; i < array.length; i++){
    if (array[i] === 1){
      nameFunc();
    } else if (array[i] === 2){ 
      tvFunc();
    } else if (array[i] === 3){
      jobFunc();
    } else if (array[i] === 4){
      ageFunc();
    } else if (array[i] === 5){
      petFunc();
    } else if (array[i] === 6){
      guessFunc();
    } else {
      citiesFunc();
    }
  }
}

function nameFunc() {
  name = prompt("What's my first name?");
  if (name.toLowerCase() === 'patrick') {
    counter++;
  } else {
    wrongAnswer.push(" My first name isn't " + name + ".");
  }
}

function tvFunc() {
  tv = prompt("What tv show did I mention in my Code Fellow's self-introduction?");
  if (tv.toLowerCase() === 'supernatural'){
    counter++;
  } else {
    wrongAnswer.push(" " + tv + " wasn't the show I mentioned in class.");
  }
}
function jobFunc() {
  job = prompt("What was my last job?  No articles, please - just a word.");
  if ((job.toLowerCase() === "lawyer") || (job.toLowerCase() === "attorney")) {
    counter++;
  } else {
    wrongAnswer.push(" I didn't work as a(n) " + job + " for my last job.");
  }
}
function ageFunc(){
  age = prompt("How old am I? (As of December 2015.)");
  if (age === "quit" || age === "Quit" || age === "q" || age === "Q") {
      alert("You suck at writing numbers.");
  } else if (!parseInt(age)){
      age = prompt("Please enter an interger value for my age, or type 'quit'.");
      ageFunc();
  } else if (parseInt(age) === 37){
      counter++;
  } else {
      wrongAnswer.push(" I'm not " + age + " years old.");
  }
}
function petFunc() {
  pet = prompt("What was the name of my first pet?");
  if (pet.toLowerCase() === 'claw'){
    counter++;
  } else {
    wrongAnswer.push(" My first pet wasn't named " + pet + ".");
  }
}

function guessFunc(){
  var correctAnswer = Math.ceil(Math.random() * 100);
  var guess = null;
  while (parseInt(guess) !== correctAnswer){
    if (guess === null){
      guess = prompt("I'm thinking of a number between 1 and 100. What is it? (type q to quit)");
    } else if (guess === 'q' || guess === 'Q' || guess === 'quit' || guess === 'Quit') {
        alert("Fine.  You don't want to play. Moving on.");
        wrongAnswer.push(" You couldn't guess my number.");
        break;
    }else if (isNaN(parseInt(guess))) {
      guess = prompt("You're not even trying.  Guess a number or type q to quit.");
    } else if (parseInt(guess) < correctAnswer){
      guess = prompt("Your guess was too low.  Try again!");
    } else if (parseInt(guess) > correctAnswer){
      guess = prompt("Your guess was too high.  Try again!");
    } else {
      alert("Bingo! " + correctAnswer + "was my number! Good job!");
      counter++;
    }
  }
}
function citiesFunc(){
  var cities = ["seattle", "chicago", "berkeley"];
  var guess = prompt("Name a city I've lived in").toLowerCase();
  var checkGuess;
  for (i=0; i < cities.length ; i++)
    if (guess === cities[i]){
      checkGuess = true;
    }
  if (checkGuess) {
    counter++;
  } else {
    wrongAnswer.push(" I've never lived in" + guess + ".");
  }
}
function answers() {
    if (counter === numOfQs) {
    alert("You got them all right!");
  } else {
    alert("You got " + counter + " answer(s) correct. " + wrongAnswer.join(' '));
  }
}


//function calls
qNumber();
qArrayMaker();
gameFunc(qNumArray);
answers();


