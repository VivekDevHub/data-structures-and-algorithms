// Find semi-perimeter: s=a+b+c/2
// Find area: Area= sqrt s(s−a)(s−b)(s−c)

let a = 5;
let b = 6;
let c = 7;

// Calculate semi-perimeter
let s = (a + b + c) / 2;

// Calculate area using Heron's formula
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Area of Triangle =", area.toFixed(2));

// using formula
function heronsFormula(a, b, c) {
    let s = (a + b + c) / 2;

    let area = Math.sqrt(
        s * (s - a) * (s - b) * (s - c)
    );

    return area;
}

console.log("Area =", heronsFormula(5, 6, 7).toFixed(2));


