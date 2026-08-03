let input = prompt("Enter the purchase amount:");

if (input === null || input.trim() === "") {
    console.log("Error: Amount cannot be empty.");
} else {
    let amount = Number(input);

    if (isNaN(amount) || amount < 0) {
        console.log("Invalid amount! Please enter a valid price.");
    } else {
        let discount = 0;

        if (amount >= 5000) {
            discount = 20;
        } else if (amount >= 3000) {
            discount = 15;
        } else if (amount >= 1000) {
            discount = 10;
        } else {
            discount = 0;
        }

        let discountAmount = (amount * discount) / 100;
        let finalAmount = amount - discountAmount;

        console.log("Purchase Amount: ₹" + amount);
        console.log("Discount: " + discount + "%");
        console.log("Discount Amount: ₹" + discountAmount);
        console.log("Final Amount to Pay: ₹" + finalAmount);
    }
}
