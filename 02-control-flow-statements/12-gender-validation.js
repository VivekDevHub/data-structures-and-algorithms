let gender = prompt("Enter your gender (Male/Female):");

// Check if input is empty
if (gender === null || gender.trim() === "") {
    console.log("Error: Gender cannot be empty.");
} else {
    gender = gender.trim().toLowerCase();

    if (gender === "male") {
        console.log("Good Morning, Sir!");
    } else if (gender === "female") {
        console.log("Good Morning, Ma'am!");
    } else {
        console.log("Invalid gender! Please enter only 'Male' or 'Female'.");
    }
}