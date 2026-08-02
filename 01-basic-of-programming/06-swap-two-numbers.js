// Using a Temporary Variable (Most Common)

let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log("a =", a);
console.log("b =", b);

// Without Using a Third Variable (Addition & Subtraction)
let x = 30;
let y = 40;

x = x + y;
y = x - y;
x = x - y;

console.log("x =", x);
console.log("y =", y);

//Using Destructuring Assignment (Modern JavaScript)
let c = 50;
let d = 60;

[c, d] = [d, c];

console.log("c =", c);
console.log("d =", d);


