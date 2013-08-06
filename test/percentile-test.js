var Percentile = require('../');
var a = require('assert');

var testValues = Array.apply(Array, new Array(1000)).map(Math.random);

var percentile = new Percentile(1000, testValues);

describe('percentile', function(){

	it('should interpolate values', function(){
		a.equal(percentile.percentile(10), 0.1);
	});

});