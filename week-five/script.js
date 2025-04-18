'use strict';
// Davis Frick, April 16, 2025
// Initialize
let greeting = 'Welcome to the Nightruder: A Night Interrupted promotional page!';
alert(greeting);

// Reassign
greeting = "Nightruder is the GOAT!";
console.log(greeting);

// 5
let readyToLaunch = false;
console.log(readyToLaunch);

//  6
let preorders = 4538;
let promoCopies = 22;
const retailPrice = 79;
console.log(`Nightruder has ${preorders} preorders, looking at $${retailPrice * (preorders - promoCopies)} in sales`);

// 8
console.log('Type Conversion Examples:');
console.log('"" + 1 + 0 =', "" + 1 + 0);          // "10"
console.log('"" - 1 + 0 =', "" - 1 + 0);          // -1
console.log('true + false =', true + false);      // 1
console.log('6 / "3" =', 6 / "3");                // 2
console.log('"2" * "3" =', "2" * "3");            // 6
console.log('4 + 5 + "px" =', 4 + 5 + "px");      // "9px"
console.log('"$" + 4 + 5 =', "$" + 4 + 5);        // "$45"
console.log('"4" - 2 =', "4" - 2);                // 2
console.log('"4px" - 2 =', "4px" - 2);            // NaN
console.log('7 / 0 =', 7 / 0);                    // Infinity
console.log('"  -9  " + 5 =', "  -9  " + 5);      // "  -9  5"
console.log('"  -9  " - 5 =', "  -9  " - 5);      // -14
console.log('null + 1 =', null + 1);              // 1
console.log('undefined + 1 =', undefined + 1);    // NaN