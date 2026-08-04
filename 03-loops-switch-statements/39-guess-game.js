// Guess Game 
// Computer ek random number generate karega User guess karega

// Computer Number = 7

// User → 5
// Too Low

// User → 9
// Too High

// User → 7
// Correct!

let secretNumber = Math.floor(Math.random() * 10) + 1;

let guess;

do {

    guess = Number(prompt("Guess a number between 1 and 10:"));

    if (guess < secretNumber) {

        console.log("Too Low!");

    } else if (guess > secretNumber) {

        console.log("Too High!");

    } else {

        console.log("🎉 Correct Guess!");

    }

} while (guess !== secretNumber);