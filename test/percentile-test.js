var Percentile = require('../');
var a = require('assert');

var testValues = Array.apply(Array, new Array(1000)).map(Math.random);

var percentile = new Percentile(testValues, 1000);

console.log(testValues);

describe('percentile', function(){

	it('should be roughly correct', function(){
		a(percentile.percentile(100) >= 0.99);
		a(percentile.percentile(10) <= 0.1);
	});

});