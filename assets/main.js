const wordlist = ["now", "find", "long", "down", "day", "did", "get", "come", "made", "may",
"part", "over", "yellow", "orange", "brown"];

const word = wordlist[Math.floor(Math.random() * wordlist.length)];
let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
 let remainingLetters = word.length;
 let guessed = [];
 let guessesLeft = 0;

//document.getElementById("word").innerHTML = answerArray.join(" ");

document.addEventListener("keydown", whatLetter);
console.log(word);

function whatLetter(event) {

    let guess = event.key.toLowerCase();
        console.log(guess);
        // this allows the user to input a letter
    
            guessed.push(guess);
            //document.getElementById("guessed").innerHTML = guessed;
            //console.log(guessed);
    
            //update game state with guessed letter
            for (let j = 0; j <word.length; j++){
                //for letter in the word
                let letter = word[j];
                if(letter === guess) {
                    answerArray[j] = letter;
                    remainingLetters --;
                    keepCatIn();
                    break;
                    }
                else if (letter !== guess) {
                    guessesSoFar++;
                    document.getElementById("guessed").innerHTML = guessed;
                    console.log(guessed);
                    document.getElementById("guessesSoFar").innerHTML = "Guesses  so far = " + guessesSoFar;
                    catEscape()
                    }
                else (
                    console.log("try again")
                )
                   
                }
            document.getElementById("word").innerHTML = answerArray.join(" ");
    }

    function catEscape(guess) {
        //document.getElementsByClassName("fa-cat").innerHTML = ("");
        console.log("You are letting the cat out!")
    }

    function keepCatIn() {
        console.log("great job");
    }
