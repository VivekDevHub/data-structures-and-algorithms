
let input = prompt("Enter your age:");

if (input === null || input.trim() === "") {
    console.log("Error: Age cannot be empty.");
} else {
    let age = Number(input);

    if (isNaN(age) || age < 0) {
        console.log("Invalid age! Please enter a valid age.");
    } else if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        let yearsLeft = 18 - age;
        console.log("You are not eligible to vote.");
        console.log("You can vote after " + yearsLeft + " year(s).");
    }
}