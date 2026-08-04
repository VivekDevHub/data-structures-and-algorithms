# data-structures-and-algorithms

DSA Pattern Sheet = https://docs.google.com/spreadsheets/d/1T5-nGsJ9WNwna44e9WWRD0jlZIT5KxVOGvylcvvVrY8/htmlview?usp=sharing&pru=AAABn_E4TXo*cNtlHOE_d-uCWMOeWJO35g

Mastering Data Structures &amp; Algorithms through clean implementations, problem-solving techniques, and coding 
interview preparation.



⭐ STAR PATTERN CHEAT SHEET
════════════════════════════

1. OUTER LOOP
   → Rows

2. INNER LOOP
   → Columns / Characters

3. INCREASING
   → j <= i

4. DECREASING
   → j <= n-i+1

5. FIXED
   → j <= n

6. RIGHT ALIGN
   → Spaces = n-i
   → Stars = i

7. INVERTED RIGHT
   → Spaces = i-1
   → Stars = n-i+1

8. PYRAMID
   → Spaces = n-i
   → Stars = 2i-1

9. INVERTED PYRAMID
   → Spaces = i-1
   → Stars = 2(n-i)+1

10. DIAMOND
    → Pyramid + Inverted Pyramid

11. HOLLOW
    → Boundary = *
    → Inside = space

12. X
    → j === i
    → OR
    → j === n-i+1

13. SQUARE
    → n rows
    → n columns

14. NUMBER PATTERN
    → Replace "*" with i/j

════════════════════════════

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

function square(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
square(5);



*
* *
* * *
* * * *
* * * * *

function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {   // inner loop runs "i" times
      row += "* ";
    }
    console.log(row);
  }
}
leftTriangle(5);




* * * * *
* * * *
* * *
* *
*
function invertedLeftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
invertedLeftTriangle(5);


        *
      * *
    * * *
  * * * *
* * * * *

function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += "  "; // spaces
    for (let j = 1; j <= i; j++) row += "* ";      // stars
    console.log(row);
  }
}
rightTriangle(5);


    *
   * *
  * * *
 * * * *
* * * * *

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";
    console.log(row);
  }
}
pyramid(5);



* * * * *
 * * * *
  * * *
   * *
    *

    function invertedPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s < i; s++) row += " ";
    for (let j = 1; j <= 2 * (n - i) + 1; j++) row += "*";
    console.log(row);
  }
}
invertedPyramid(5);


* * * * *
*       *
*       *
*       *
* * * * *

function hollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
hollowSquare(5);


*
**
* *
*  *
*****
function hollowTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === n) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
hollowTriangle(5);



1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
function pascalsTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let val = 1;
    for (let j = 0; j <= i; j++) {
      row += val + " ";
      val = (val * (i - j)) / (j + 1);
    }
    console.log(row);
  }
}
pascalsTriangle(5);



1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

function numberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
numberTriangle(5);





━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       ⭐ PATTERN FORMULAS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Increasing Triangle

*
**
***
****

Stars = i


Decreasing Triangle

****
***
**
*

Stars = n - i + 1


Right Triangle

   *
  **
 ***
****

Spaces = n - i
Stars  = i


Inverted Right Triangle

****
 ***
  **
   *

Spaces = i - 1
Stars  = n - i + 1


Pyramid

   *
  ***
 *****
*******

Spaces = n - i
Stars  = 2i - 1


Inverted Pyramid

*******
 *****
  ***
   *

Spaces = i - 1
Stars = 2(n-i) + 1


Square

*****
*****
*****
*****

Rows = n
Columns = n
━━━━━━━━━━━━━━━━━━━━━━━━━━━━


