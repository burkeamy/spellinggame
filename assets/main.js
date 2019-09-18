const wordlist = ["number", "way", "could", "people", "my", "then", "first", "water", 
"been", "call", "who", "oil", "red", "green", "black"];

const word = wordlist[Math.floor(Math.random() * wordlist.length)];
let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
 let remainingLetters = word.length;
 let guessed = [];

/*while (remainingLetters > 0) {
    //show progress - to be changed
    alert(answerArray.join(" "));
    //player enters a guess
    let guess = prompt("guess a letter or click cancel to stop playing");

    //for blank guess or cancel play
    if (guess == null) {
        //exit loop
        break;
    }
    //if not a single letter guess
    else if (guess.length !== 1) {
        alert("please enter only one letter at a time");
    }
    else {
        //update game state with guessed letter
        for (let j = 0; j <word.length; j++){
            //for letter in the word
            if(word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters --;
            }
        }
    }
}
alert(answerArray.join(" "));
alert("good job! The answer was " + word);*/
//}


document.addEventListener("keydown", whatLetter);

function whatLetter(event) {
    document.getElementById("word").innerHTML = answerArray.join(" ");

    let guess = event.key.toLowerCase();
            //var guess = document.getElementById("guessed").innerHTML = key;
          console.log(guess);
        // this allows the user to input a letter
    
            guessed.push(guess);
            document.getElementById("guessed").innerHTML = guessed;
            console.log(guessed);
     
        //if not a single letter guess
         if (guess.length !== 1) {
            alert("please enter only one letter at a time");
        }
        else {
            //update game state with guessed letter
            for (let j = 0; j <word.length; j++){
                //for letter in the word
                if(word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters --;
                }
            }
        }
    }
    //alert(answerArray.join(" "));
    //alert("good job! The answer was " + word);
    //}
   
    
    /*else if (guessesLeft === 0) {
        losses++;
        document.getElementById("lose").innerHTML = ("Losses =  " + losses); 
        document.getElementById("num").innerHTML = guessesLeft = 9;
        guessed = [];
        guessLetter();
        // this is supposed to return the guesses left back to 9 and reset the game
        
        }
    else {
        guessesLeft--;
        document.getElementById("num").innerHTML = "Guesses  left = " + guessesLeft;       
        }
     //this is supposed to increases losses by one and decreases guesses left by one
    //}
  }
}*/
