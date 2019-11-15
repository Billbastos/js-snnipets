/* Currying allows to store and scope values in previous calls. */

console.warn(' -- Currying --');

// Regular function receiving 3 args
function fn(a,b,c) {
	return a * b * c;
}

// Partial application (is not a currying but it scopes the value the same way)
function _partial(a, b){
	return function(c) {
    return a * b * c;
  }
}

var partial = _partial(2,2);
console.log('Partial application: value = ' + partial(2)); 
// Output: 8


// Currying the function above
function _fn(a){
	return function(b) {
  	return function(c){
    	return a * b * c;
    }
  }
}

// Use
var firstFn = _fn(2);
var secondFn = firstFn(2);
var value = secondFn(3);

console.log('Currying first use: value =  ' + value);
// Output: 12

// Another use
var _value = _fn(2)(2)(2);
console.log('Currying second use: value =  ' + _value);
// Output: 8

