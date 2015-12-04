
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
var mBox = document.getElementById("messageBox");
var qBox = document.getElementById("questionBox");
var iBox = document.getElementById("imputBox");
var aBox = document.getElementById("answerBox");
var qList = document.getElementById("questionList");

//declaring functions

function qNumber(){
  numOfQs = parseInt(prompt("How many questions do you want? Choose a number less than or equal to 7."));
  mBox.textContent= " ";
  if (!(numOfQs > 0 && numOfQs <= 7)){
    mBox.textContent = "Please select an interger greater than 0 and less than 8.";
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
      easyQFunc(0);
    } else if (array[i] === 2){ 
      easyQFunc(1);
    } else if (array[i] === 3){
      easyQFunc(2);
    } else if (array[i] === 4){
      ageFunc();
    } else if (array[i] === 5){
      easyQFunc(3);
    } else if (array[i] === 6){
      guessFunc();
    } else {
      easyQFunc(4);
    }
  }
}

function easyQFunc(num){
  var easyQArray = ["What's my first name?", 
                    "What tv show did I mention in my Code Fellow's self-introduction?",
                    "What was my last Job?", 
                    "What was the name of my first pet?",
                    "Name a city I lived in."
                    ];
  var easyAArray = [["patrick"], ["supernatural"], ["lawyer", "attorney"], ["claw"], ["seattle", "chicago", "berkeley"]];

  var guess = prompt(easyQArray[num]);

  var liEl  = document.createElement("li");
  liEl.innerHTML = easyQArray[num] + "<br> Your Answer: " + guess + ".";
  qList.appendChild(liEl);

  var easyWArray = [" My first name isn't " + guess + ".", 
                    " " + guess + " wasn't the show I mentioned in class.", 
                    " I didn't work as a(n) " + guess + " for my last job.",
                    " My first pet wasn't named " + guess + ".",
                    " I've never lived in" + guess + "."
                    ];

  if (guess.toLowerCase() === easyAArray[num][0] || guess.toLowerCase() === easyAArray[num][1] || guess.toLowerCase() === easyAArray[num][2]){
    counter++;
    console.log(counter);
    aBox.textContent = "You got it right!";
    aBox.className = "right";
  } else {
    wrongAnswer.push(easyWArray[num]);
    aBox.textContent = "WRONG!";
    aBox.className = "wrong";
  }
}

// function nameFunc() {
//   name = prompt("What's my first name?");
//   if (name.toLowerCase() === 'patrick') {
//     counter++;
//   } else {
//     wrongAnswer.push(" My first name isn't " + name + ".");
//   }
// }

// function tvFunc() {
//   tv = prompt("What tv show did I mention in my Code Fellow's self-introduction?");
//   if (tv.toLowerCase() === 'supernatural'){
//     counter++;
//   } else {
//     wrongAnswer.push(" " + tv + " wasn't the show I mentioned in class.");
//   }
// }
// function jobFunc() {
//   job = prompt("What was my last job?  No articles, please - just a word.");
//   if ((job.toLowerCase() === "lawyer") || (job.toLowerCase() === "attorney")) {
//     counter++;
//   } else {
//     wrongAnswer.push(" I didn't work as a(n) " + job + " for my last job.");
//   }
// }
function ageFunc(){
  var liEl  = document.createElement("li");

  age = prompt("How old am I? (As of December 2015.)");
  if (age === "quit" || age === "Quit" || age === "q" || age === "Q") {
      alert("Quitter. Also, WRONG.");
      var quit = true;
  } else if (!parseInt(age)){
      age = prompt("Please enter an interger value for my age.");  
  } 
  if (parseInt(age) === 37  ){
      counter++;
      console.log(counter);
      aBox.textContent = "You got it right!";
      aBox.className = "right";
  } else {
      wrongAnswer.push(" I'm not " + age + " years old.");
    aBox.textContent = "WRONG";
    aBox.className = "wrong";
  }
  liEl.innerHTML = "How old am I? (as of December, 2015)<br> Your Answer: " + age + ".";
  qList.appendChild(liEl);

}
function ageQtracker(){

}
// function petFunc() {
//   pet = prompt("What was the name of my first pet?");
//   if (pet.toLowerCase() === 'claw'){
//     counter++;
//   } else {
//     wrongAnswer.push(" My first pet wasn't named " + pet + ".");
//   }
// }

function guessFunc(){
  var correctAnswer = Math.ceil(Math.random() * 100);
  console.log(correctAnswer);
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
    }
  }
  if(guess === correctAnswer){
    alert("Bingo! " + correctAnswer + " was my number! Good job!");
  counter++;
  console.log(counter);
  }
  var liEl  = document.createElement("li");
  liEl.innerHTML = "I'm thinking of a number between 1 and 100.  <br> My number: " + correctAnswer + "<br>Your Answer: " + guess + ".";
  qList.appendChild(liEl);
}
// function citiesFunc(){
//   var cities = ["seattle", "chicago", "berkeley"];
//   var guess = prompt("Name a city I've lived in").toLowerCase();
//   var checkGuess;
//   for (i=0; i < cities.length ; i++)
//     if (guess === cities[i]){
//       checkGuess = true;
//     }
//   if (checkGuess) {
//     counter++;
//   } else {
//     wrongAnswer.push(" I've never lived in" + guess + ".");
//   }
// }
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


