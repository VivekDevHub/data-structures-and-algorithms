let input = prompt("Enter a year:");

if (input === null || input.trim() === "") {
    console.log("Error: Year cannot be empty.");
} else {
    let year = Number(input);

    if (isNaN(year) || year < 1) {
        console.log("Invalid year! Please enter a valid year.");
    } else if (year % 400 === 0) {
        console.log(year + " is a Leap Year.");
    } else if (year % 100 === 0) {
        console.log(year + " is not a Leap Year.");
    } else if (year % 4 === 0) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is not a Leap Year.");
    }
}