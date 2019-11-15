/* A higher-order function is a function that receives
   a function as an argument or returns the function as
   an output. */

console.warn(' -- Built-in Higher-order function --');

// Build-in higher-order functions
var arr = [1,2,3,4];

var mapArr    = arr.map( n => n+1 );
console.log('map: ' + mapArr);
// output: [2,3,4,5]

var reduceArr = arr.reduce( (acc, n) => acc += n, 10 );
console.log('reduce: ' + reduceArr);
// output: 20

var filterArr = arr.filter( n => n % 2 );
console.log('filter: ' + filterArr);
// output: [1,3]

var findArr   = arr.find( n => n === 1 );
console.log('find: ' + findArr);
// output: 1

var sortArr   = arr.sort( (a,b) => b - a );
console.log('sort: ' + sortArr);
// output: [4,3,2,1]

var someArr   = arr.some( n => n === 1 );
console.log('some: ' + someArr);
// output: true
