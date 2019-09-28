const wordlist = ["now", "find", "long", "down", "day", "did", "get", "come", "made", "may",
"part", "over", "yellow", "orange", "brown"];

const word = wordlist[Math.floor(Math.random() * wordlist.length)];
let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
 let guessed = [];
 let guessesLeft = word.length + 10;


 function gamesetup() {
    document.getElementById("word").innerHTML = answerArray.join(" ");
    document.getElementById("guessesLeft").innerHTML = ("You have " + guessesLeft + " guesses left");
}

document.addEventListener("keydown", whatLetter);
console.log(word);

function whatLetter(event) {

    let foundindex = [];
    let guess = event.key.toLowerCase();
        console.log(guess);

    if(event.keyCode < 65 || event.keyCode >90) {
        document.getElementById("comments").innerHTML = ("Please press a letter key");
    } else if(guessed.indexOf(guess) > -1 && guessed.length>0) {
        document.getElementById("comments").innerHTML = ("already guessed");
    } else {
        guessed.push(guess);
        if(word.indexOf(guess) === -1) {
            guessesLeft--;
            catEscape();
        }
        for (let j =0; j<word.length; j++) {
            if(word[j] === guess) {
                foundindex.push(j);
                document.getElementById("comments").innerHTML = ("");
            }
        }
        for (let k=0; k<foundindex.length; k++) {
            answerArray[foundindex[k]] = guess;
            if (answerArray === word) {
                keepCatIn();
            }
        }
    }   
                
    document.getElementById("guessesLeft").innerHTML = ("You have " + guessesLeft + " guesses left");
	document.getElementById("guessed").innerHTML = guessed;
    document.getElementById("word").innerHTML = answerArray.join(" ");
              
   }

    function catEscape(guess) {
        console.log("You are letting the cat out!")
    }

    function keepCatIn() {
        console.log("great job");
    }
