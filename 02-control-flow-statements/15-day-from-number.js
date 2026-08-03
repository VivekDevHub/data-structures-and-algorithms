let input = prompt("Enter a number (1-7):");

if (input === null || input.trim() === "") {
    console.log("Error: Please enter a number.");
} else {
    let day = Number(input);

    if (isNaN(day)) {
        console.log("Invalid input! Please enter a valid number.");
    } else {
        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("Invalid day number! Please enter a number between 1 and 7.");
        }
    }
}