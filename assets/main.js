const wordlist = ["would", "make", "like", "him", "into", "time", "has", "look", "two",
"more", "write", "go", "see", "when", "what"];

const word = wordlist[Math.floor(Math.random() * wordlist.length)];
let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
 let remainingLetters = word.length;

//creating hangman game
while (remainingLetters > 0) {
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
alert("good job! The answer was " + word);
