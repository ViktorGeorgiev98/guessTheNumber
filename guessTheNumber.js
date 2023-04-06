function guessTheNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    let wrongGuessCounter = 0;

    let recursiveAsyncReadLine = function (){
        readline.question('Guess the number (0 - 100): ' , guess => {
            guess = Number(guess);
            if (wrongGuessCounter === 7) {
                console.log('Computer wins!');
                return readline.close;
            }

            if (guess <= 100 && guess >= 0) {
                if (guess === computerGuess) {
                    console.log('You guessed it!');
                    return readline.close();
                } else if (guess < computerGuess) {
                    console.log('Too low!');
                    recursiveAsyncReadLine();
                    
                } else if (guess > computerGuess) {
                    console.log('Too high!');
                    recursiveAsyncReadLine();
                    
                }
            } else {
                console.log('Invalid number! Please, try again...');
                recursiveAsyncReadLine();
            }
        })
    }
    recursiveAsyncReadLine();
}
guessTheNumber();