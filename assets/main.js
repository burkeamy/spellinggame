const wordlist = ["did","yellow","none","hangman"];

const word = wordlist[Math.floor(Math.random() * wordlist.length)];
let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
 let remainingLetters = word.length;
 let guessed = [];
 let guessesLeft = word.length + 2;
function gamesetup() {
    document.getElementById("word").innerHTML = answerArray.join(" ");
    document.getElementById("guessesleft").innerHTML = guessesLeft;
}

document.addEventListener("keydown", whatLetter);
console.log(word);

function whatLetter(event) {
	
let foundindex = [];
	
    let guess = event.key.toLowerCase();
    
    
        //console.log(guess);
        //console.log(event.keyCode);
        if(event.keyCode < 65 || event.keyCode >90) {
            console.log("Please press a letter key");
        }
        //console.log(guess);

        // this allows the user to input a letter
    
            
            //document.getElementById("guessed").innerHTML = guessed;
            //console.log(guessed);
            //console.log(guessed.indexOf(guess));
            
            if(guessed.indexOf(guess) > -1 && guessed.length>0) {
				console.log("already guessed");
			} else {
				guessed.push(guess);
				
				if(word.indexOf(guess) === -1) {
					console.log("wrong" + " " + guess);
					guessesLeft--;				
				}
				for (let j =0; j<word.length; j++) {
					if(word[j] === guess) {
						foundindex.push(j);
					}
				}
				for (let j=0;j<foundindex.length;j++) {
					answerArray[foundindex[j]] = guess;
				}
			}           
            			
			//console.log("foundindex" + " " + foundindex);			
			//console.log("answerarray" + " " + answerArray);
			
			document.getElementById("guessesleft").innerHTML = guessesLeft;
			document.getElementById("guessed").innerHTML = guessed;
			
			//for(let j=0;j<
            
            /*
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
            */
            document.getElementById("word").innerHTML = answerArray.join(" ");
    }

    function catEscape(guess) {
        //document.getElementsByClassName("fa-cat").innerHTML = ("");
        console.log("You are letting the cat out!")
    }

    function keepCatIn() {
        console.log("great job");
    }
