/* A higher-order function is a function that receives
   a function as an argument or returns the function as
   an output. */

console.warn(' -- Higher-order function --');

// Build-in higher-order functions
var arr = [1,2,3,4];
arr = arr.map(n=>n+1);
console.log('Build-in higher-order function (map): ' + arr);
// output: [2,3,4,5]


// Creating higher-order functions
var arr2 = [3,6,9,12];

Array.prototype.myHigherOrderFunctionMap = function(fn) {
  let newArr = [];
  for(let i = 0; i < this.length; i++){
    newArr.push(fn(this[i], i, this));
  }
  return newArr;
}

// Using the custom higher-order function
arr2 = arr2.myHigherOrderFunctionMap((val, index, arr) => {
  return val + 1;
});
console.log('Custom higher-order function (map): ' + arr2);
// output: [4,7,10,13];