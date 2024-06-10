let gameResult = document.getElementById("gameResult");
// console.log(gameResult);

let userInput = document.getElementById("userInput");
// console.log(userInput);

let randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber);


function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    // console.log(typeof(guessedNumber));

    if (guessedNumber > randomNumber){
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
        // gameResult.style.textDecoration = "underline";
    }
    else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c"
        
    } 
    else if (guessedNumber === randomNumber){
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";

    }
    else{
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";
    }
}