
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
let wins = 0;
let lost = 0;
//Array of correctly guessed words
let usedWords = [];
//setting up for canvas
let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

//displaying everything to play the game
 function gamesetup() {
    document.getElementById("word").innerHTML = answerArray.join(" ");
    document.getElementById("guessesLeft").innerHTML = ("You have " + guessesLeft + " wrong guesses left");
}

document.addEventListener("keydown", whatLetter);

function whatLetter(event) {
    //where the letter goes in the word
    let foundindex = [];
    //converting to lower case, so all letters are equal
    let guess = event.key.toLowerCase();

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
            if (guessesLeft === 0) {
                keepGuessing();
            } else if(guessesLeft === 9) {
                drawHead();
            }else if(guessesLeft === 8) {
                drawBody();
            }else if(guessesLeft === 7) {
                drawLeftLeg();
            } else if(guessesLeft === 6) {
                drawRightLeg();
            }else if(guessesLeft === 5) {
                drawLeftArm();
            }else if(guessesLeft === 4) {
                drawRightArm();
            }else if(guessesLeft === 3) {
                drawEyes();
            }else if(guessesLeft === 2) {
                drawNose();
            }else  {
                drawMouth();
            }
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
        }
        //changing the DOM to reflect the guess made        
        document.getElementById("guessesLeft").innerHTML = ("You have " + guessesLeft + " wrong guesses left");
        document.getElementById("guessed").innerHTML = guessed;
        document.getElementById("word").innerHTML = answerArray.join(' ');
    }
} 
//this checks if all letters are guessed in a word
function checkAnswer(answerArray) {
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
    } 
    if (compareWords === true) {
        correctWord();
    }
}

function keepGuessing() {
    lost ++;
    document.getElementById("comments").innerHTML = ("Game over! Try again.");
    document.getElementById("lost").innerHTML = ("Losses = " + lost); 
    gameReset();
    c.clearRect(0,0, c.canvas.width, c.canvas.height);
}

function correctWord() {
    wins++;
    wordlist.pop(word);
    usedWords.push(word);
    document.getElementById("comments").innerHTML = ("You win!");
    document.getElementById("wins").innerHTML = ("Wins =  " + wins);
    gameReset();
}
//resetting the game with a new word so you can keep playing
function gameReset() {
    word = wordlist[Math.floor(Math.random() * wordlist.length)];
    answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    guessed = [];
    gamesetup();
}
    function drawHead () {
    c.beginPath();
    c.arc(150,50, 30, 0, Math.PI *2);
    c.stroke();
    };

    function drawBody() {
    c.beginPath();
    c.moveTo(150, 80);
    c.lineTo(150,150);
    c.stroke();
    };

    function drawLeftLeg() {
    c.beginPath();
    c.moveTo(150, 150);
    c.lineTo(120, 200);
    c.stroke();
    };

    function drawRightLeg() {
    c.beginPath();
    c.moveTo(150, 150);
    c.lineTo(180, 200);
    c.stroke();
    };

    function drawLeftArm() {
    c.beginPath();
    c.moveTo(150,100);
    c.lineTo(110, 90);
    c.stroke();
    };

    function drawRightArm() {
    c.beginPath();
    c.moveTo(150, 100);
    c.lineTo(190, 90);
    c.stroke();
    };

    function drawEyes() {
    c.beginPath();
    c.arc(138, 48, 3, 0, Math.PI *2);
    c.fill();
    c.stroke();
    c.beginPath();
    c.arc(163, 48, 3, 0, Math.PI *2);
    c.fill();
    c.stroke();
    };

    function drawNose() {
    c.beginPath();
    c.moveTo(148, 55);
    c.lineTo(150, 59);
    c.lineTo(152, 55);
    c.stroke();
    };

    function drawMouth() {
    c.beginPath();
    c.arc(150, 62, 10, 0, Math.PI);
    c.stroke();
    }
    