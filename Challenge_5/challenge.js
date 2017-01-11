// E1
var name;
name = "Umar";
console.log("Hello " + name);

// E2
var x = 1125;
var answer = x % 2;
console.log(answer);

// E3
var a = true;
var b = false;
var c = true;
console.log(a || b || c);

// E4
console.log(a && b && c);

// E5 
// Answers are different because parenthesis change order of operations
var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log(answer1); 
console.log(answer2);

// E6
// Result is NaN meaning not a Number
// We cant convert alphabet characters to an integer
String(12);
parseInt("113");
parseFloat("1.12356");
x = parseInt("Hello World");
console.log(x);

