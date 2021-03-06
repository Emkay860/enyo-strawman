var
	kind = require('enyo/kind');

var
	Button = require('enyo/Button');

var samplekind = kind({
	name: 'enyo.sample.SampleKind',
	components: [
		{name: 'title'},
		{name:'red', style:'background:red; color:white; padding:10px;', content:'Red', components: [
			{name:'orange', style:'background:orange; color:white; padding:10px;', content:'Orange', components: [
				{name:'green', style:'background:green; color:white; padding:10px; border-radius:10px;', content:'Green'}
			]}
		]},
		{name:'purple', style:'background:purple; color:white; padding:10px;', content:'Purple'},
		{name:'blue', style:'background:blue; color:white; padding:10px;', content:'Blue'}
	],
	create: function() {
		this.inherited(arguments);
		this.$.title.setContent(this.kindName);
	}
});

var subsamplekind = kind({
	name: 'enyo.sample.SubSampleKind',
	kind: samplekind,
	componentOverrides: {
		purple: {kind: Button, content:'Purple shmurple!', style:'border-radius:30px;'},
		green: {kind: Button, content:'Now I\'m a Pink button!', style:'background-color:pink;'}
	}
});

module.exports = kind({
	name: 'enyo.sample.ComponentOverrideSample',
	components: [
		{kind: samplekind},
		{style:'height:50px;'},
		{kind: subsamplekind},
		{style:'height:50px;'},
		{kind: samplekind}
	]
});
