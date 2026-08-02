// Post Increment (a++)
let a = 10;
console.log(a++);
console.log(a);
// a++ returns the current value first (10), then increments a to 11.

// Pre Increment (++a)
let b = 10;
console.log(++b);
console.log(b);
// ++a increments a first, then returns the new value (11).


// Multiple Increments
let x = 1;
x++;
x++;
x++;
console.log(x);


// Mixed Increment and Decrement
let c = 10;
c++;
c--;
++c;
--c;

console.log(c);


// practice
let d = 10;
console.log(++d + d++ + --d);

