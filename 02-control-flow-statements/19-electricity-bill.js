let input = prompt("Enter electricity units consumed:");

if (input === null || input.trim() === "") {
    console.log("Error: Units cannot be empty.");
} else {
    let units = Number(input);

    if (isNaN(units) || units < 0) {
        console.log("Invalid units! Please enter a valid number.");
    } else {
        let billAmount = 0;

        if (units <= 100) {
            billAmount = units * 5;
        } else if (units <= 200) {
            billAmount = (100 * 5) + ((units - 100) * 7);
        } else if (units <= 300) {
            billAmount = (100 * 5) + (100 * 7) + ((units - 200) * 10);
        } else {
            billAmount = (100 * 5) + (100 * 7) + (100 * 10) + ((units - 300) * 12);
        }

        console.log("Electricity Units: " + units);
        console.log("Total Electricity Bill: ₹" + billAmount);
    }
}