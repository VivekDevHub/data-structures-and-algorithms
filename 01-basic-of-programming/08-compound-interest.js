// P = Principal (initial amount)
// R = Annual interest rate (in %)
// T = Time (years)
// The amount is calculated as: Amount = P × (1 + R / 100)^T

// Compound Interest = Amount − Principal

let principal = 10000;
let rate = 10;
let time = 2;

let amount = principal * Math.pow((1 + rate / 100), time);
let compoundInterest = amount - principal;

console.log("Amount =", amount.toFixed(2));
console.log("Compound Interest =", compoundInterest.toFixed(2));


// using function
function calculateCI(principal, rate, time) {
    let amount = principal * Math.pow((1 + rate / 100), time);
    return amount - principal;
}

console.log("Compound Interest =", calculateCI(10000, 10, 2).toFixed(2));

