"" + 1 + 0 = 10
The + operator with an empty string ("") triggers string concatenation. First, "" + 1 concatenates 1 as a string, resulting in "1". Then, "1" + 0 concatenates 0 as a string, yielding "10".

"" - 1 + 0 = -1
The - operator initiates numeric coercion. An empty string ("") coerces to 0. So, "" - 1 becomes 0 - 1 = -1, and -1 + 0 remains -1.

true + false = 1
In a numeric context with +, true coerces to 1 and false coerces to 0. Thus, 1 + 0 = 1.

6 / "3" = 2
The / operator coerces the string "3" to the number 3. Then, 6 / 3 = 2.

"2" * "3" = 6
The * operator coerces both "2" and "3" to numbers. So, 2 * 3 = 6.

4 + 5 + "px" = 9px
First, 4 + 5 performs numeric addition, resulting in 9. Then, 9 + "px" coerces 9 to "9" and concatenates, yielding "9px".

"$" + 4 + 5 = $45
The + operator with the string "$" triggers concatenation. "$" + 4 becomes "$4", and "$4" + 5 becomes "$45".

"4" - 2 = 2
The - operator coerces "4" to the number 4. Then, 4 - 2 = 2.

"4px" - 2 = NaN
The - operator attempts to coerce "4px" to a number, but the "px" makes it invalid, resulting in NaN. NaN - 2 remains NaN.

7 / 0 = Infinity
Division by zero in JavaScript returns Infinity.

"  -9  " + 5 =   -9  5
The + operator with the string "  -9  " (including whitespace) triggers concatenation. "  -9  " + 5 appends 5 as a string, resulting in "  -9  5".

"  -9  " - 5 = -14
The - operator coerces "  -9  " to a number. Whitespace is trimmed, and it parses as -9. Then, -9 - 5 = -14.

null + 1 = 1
null coerces to 0 in a numeric context with +. So, 0 + 1 = 1.

undefined + 1 = NaN
undefined coerces to NaN in a numeric context with +. Thus, NaN + 1 = NaN.

