/* A higher-order function is a function that receives
   a function as an argument or returns the function as
   an output. */

console.warn(' -- Built-in Higher-order function --');

// Build-in higher-order functions
var arr = [1,2,3,4];
arr = arr.map(n=>n+1);
console.log('map: ' + arr);
// output: [2,3,4,5]

