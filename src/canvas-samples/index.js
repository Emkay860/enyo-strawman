var
	kind = require('enyo/kind');

var
	List = require('../List');

var
	samples = {
		CanvasBalls: request('./lib/CanvasBallsSample'),
//		CanvasPrimitives: require('./lib/CanvasPrimitivesSample')
	};

module.exports = kind({
	baseHref: 'Canvas',
	kind: List,
	classes: 'enyo-fit',
	samples: Object.keys(samples),
	sampleChanged: function () {
		this.log(this.sample);
	
		var app = this.app;
		samples[this.sample].then(function (Sample) {
			app.setupView(Sample, function () { app.reRender(); });
		});
	}
});