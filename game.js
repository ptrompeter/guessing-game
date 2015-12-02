
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
  numOfQs = parseInt(prompt("How many questions do you want? Choose a number less than or equal to 5."));
  if (!(numOfQs > 0 && numOfQs <= 5)){
    alert("Please select an interger greater than 0 and less than 6.");
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
    checkNum = Math.ceil(Math.random() * 5);
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
    } else {
      petFunc();
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
    wrongAnswer.push(" my first pet wasn't named " + pet + ".");
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
console.log("numOfQs = " + numOfQs);
qArrayMaker();
console.log("qNumArray = " + qNumArray);
gameFunc(qNumArray);
answers();


