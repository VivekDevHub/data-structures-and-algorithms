// Rectangle formula  Area = Length × Width

let length = 10;
let width = 5;

let area = length * width;

console.log("Length =", length);
console.log("Width =", width);
console.log("Area of Rectangle =", area);

// using function
function rectangleArea(length, width) {
    return length * width;
}

console.log("Area =", rectangleArea(8, 6));