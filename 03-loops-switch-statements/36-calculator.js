// Menu-Driven Calculator — do...while

let choice;

do {
  choice = Number(
    prompt(
      "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division\n" +
        "5. Exit\n" +
        "Enter your choice:",
    ),
  );

  if (choice >= 1 && choice <= 4) {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    switch (choice) {
      case 1:
        console.log("Result =", a + b);
        break;

      case 2:
        console.log("Result =", a - b);
        break;

      case 3:
        console.log("Result =", a * b);
        break;

      case 4:
        if (b === 0) {
          console.log("Cannot divide by zero");
        } else {
          console.log("Result =", a / b);
        }

        break;
    }
  } else if (choice === 5) {
    console.log("Calculator Closed");
  } else {
    console.log("Invalid Choice");
  }
} while (choice !== 5);
