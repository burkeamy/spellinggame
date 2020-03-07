
//list of words trying to match in game
const wordlist = ["new", "sound", "take", "only", "little", "work", "know", "place", "year", "live",
"me", "back", "purple", "pink", "white"];
//choosing random word from the list
let word = wordlist[Math.floor(Math.random() * wordlist.length)];
//array filled with correct guesses
let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
//array filled with all guessed letters
 let guessed = [];
 //keeping track of number of guesses
 let guessesLeft = 10;

//displaying everything to play the game
 function gamesetup() {
    document.getElementById("word").innerHTML = answerArray.join(" ");
    document.getElementById("guessesLeft").innerHTML = ("You have " + guessesLeft + " wrong guesses left");
}

document.addEventListener("keydown", whatLetter);
console.log(word);

function whatLetter(event) {
    //where the letter goes in the word
    let foundindex = [];
    //converting to lower case, so all letters are equal
    let guess = event.key.toLowerCase();
        console.log(guess);

    //making sure the guess is a letter
    if(event.keyCode < 65 || event.keyCode >90) {
        //comment section tells player about what is going on in the game
        document.getElementById("comments").innerHTML = ("Please press a letter key");
    } 
    //checking for duplicate guesses
    else if(guessed.indexOf(guess) > -1 && guessed.length>0) {
        document.getElementById("comments").innerHTML = ("already guessed");
    } 
    //array of letters already guessed, including correct and incorrect guesses
    else {
        guessed.push(guess);
        //keeping track of wrong guesses
        if(word.indexOf(guess) === -1) {
            guessesLeft--;
            catEscape();
            }
        //locating where the correct guess goes in the word
        for (let j =0; j<word.length; j++) {
            if (word[j] === guess) {
                foundindex.push(j);
                //emptying commet section
                document.getElementById("comments").innerHTML = ("");
            }
        }
        //assigning empty space in word to letter 
        for (let k=0; k<foundindex.length; k++) {
            answerArray[foundindex[k]] = guess; 
            checkAnswer(answerArray, word);
            /*if(word === answerArray) {
                console.log("yay");
                checkAnswer();
            }*/
            
        }
                
        document.getElementById("guessesLeft").innerHTML = ("You have " + guessesLeft + " wrong guesses left");
        document.getElementById("guessed").innerHTML = guessed;
        document.getElementById("word").innerHTML = answerArray.join(' ');
    }
} 

function checkAnswer(answerArray, word) {
    let compareWords = false;
    let guessedWord = answerArray.join('');
    let checkguess = 0;

    for (let l = 0; l < guessedWord.length; l++) {
        if (guessedWord[l] === '_') {
            compareWords[l]= false;
        } else {
            checkguess++;
        }
    }
    if (checkguess === guessedWord.length){
        compareWords = true;
        document.getElementById("comments").innerHTML = ("You win!");
    }
    console.log(compareWords);
}

function catEscape(guess) {
    if (guessesLeft === 0) {
        console.log("game over");
        document.getElementById("comments").innerHTML = ("Game over! Try again.");
    } else {
    console.log("You are letting the cat out!")
    }
}

function keepCatIn() {
    console.log("great job the cat stayed in");
}
