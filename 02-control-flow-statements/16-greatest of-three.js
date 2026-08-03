let input1 = prompt("Enter first number:");
let input2 = prompt("Enter second number:");
let input3 = prompt("Enter third number:");

if (
    input1 === null || input1.trim() === "" ||
    input2 === null || input2.trim() === "" ||
    input3 === null || input3.trim() === ""
) {
    console.log("Error: All fields are required.");
} else {
    let num1 = Number(input1);
    let num2 = Number(input2);
    let num3 = Number(input3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Invalid input! Please enter valid numbers.");
    } else if (num1 >= num2 && num1 >= num3) {
        console.log(num1 + " is the greatest number.");
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2 + " is the greatest number.");
    } else {
        console.log(num3 + " is the greatest number.");
    }
}
