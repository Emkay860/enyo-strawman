var
	kind = require('enyo/kind'),
	ready = require('enyo/ready');

var
	ScrollingSampleList = require('../strawman/ScrollingSampleList');

var
	samples = {
		BasicAnimations: require('./src/BasicAnimations'),
		EaseAnimation: require('./src/EaseAnimation'),
		ControlAnimation: require('./src/HeartAnimation'),
		LinkedAnimation: require('./src/TrampolineEffect'),
		ColorAnimation: require('./src/SolarEclipse'),
		PerspectiveAnimation: require('./src/PerspectiveCube'),
		PathAnimation: require('./src/PathAnimation'),
		WobbleAnimation: require('./src/WobbleAnimation'),
		SequenceAnimation: require('./src/SequenceAnimation'),
		SingleComponent: require('./src/SingleComponentAnimation'),
		HierarchicalAnimation: require('./src/HierarchicalAnimation'),
		//yet to be added		
		EqualizerAnimation: require('./src/EqualizerAnimation')
	};

var Sample = kind({
	kind: ScrollingSampleList,
	title: 'Animation Samples',
	version: '1.0.0',
	libraryName: 'enyo',
	samples: samples
});

ready(function() {
	new Sample().renderInto(document.body);
});

