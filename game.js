
    alert("Time for a guessing game about me!");
    var name = prompt("What's my first name?");
    var tv = prompt("What tv show did I mention in my Code Fellow's self-introduction?");
    var job = prompt("What was my last job?  No articles, please - just a word.");
    var counter = 0;
    var wrongAnswer = [];
    if (name.toLowerCase() === 'patrick') {
      counter++;
    } else {
      wrongAnswer.push(" My first name isn't " + name + ".");
    }

    if (tv.toLowerCase() === 'supernatural'){
      counter++;
    } else {
      wrongAnswer.push(" " + tv + " wasn't the show I mentioned in class.");
    }
    if ((job.toLowerCase() === "lawyer") || (job.toLowerCase() === "attorney")) {
      counter++;
    } else {
      wrongAnswer.push(" I didn't work as a(n) " + job + " for my last job.");
    }


    if (counter === 3) {
      alert("You got them all right!");
    } else {
      alert("You got " + counter + " answer(s) correct. " + wrongAnswer.join(' '));
    }