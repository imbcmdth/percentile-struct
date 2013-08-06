var Cumulative = require('histogram-struct').cumulative,
    GeneralLUT = require('lut-struct').general,
    util = require('util');

module.exports = Percentile;

function Percentile (values, numValues) {
	Cumulative.call(this, 1000, values);
	this.numValues = numValues;
	this.LUT = new GeneralLUT(this.binCounts, this.binCenters);
//	console.log(JSON.stringify(this.LUT));
}

util.inherits(Percentile, Cumulative);

Percentile.prototype.percentile = function (percent) {
	return this.LUT.interpolate(percent * this.numValues / 100);
}