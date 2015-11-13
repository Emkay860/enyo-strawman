require('garnet');

var
	kind = require('enyo/kind'),
	ri = require('enyo/resolution'),
	GarnetTimePickerPanel = require('garnet/TimePickerPanel');

var TimePicker12Panel = kind({
	name: 'g.sample.TimePicker12Panel',
	kind: GarnetTimePickerPanel,
	hourValue: 12,
	minuteValue: 30,
	meridiemValue: 'PM'
});

var TimePicker24Panel = kind({
	name: 'g.sample.TimePicker24Panel',
	kind: GarnetTimePickerPanel,
	hourValue: 17,
	minuteValue: 45,
	meridiemValue: '24'
});

module.exports = kind({
	name: 'g.sample.TimePickerPanelSample',
	handlers: {
		onResult: 'result'
	},
	classes: 'enyo-unselectable garnet g-sample',
	components: [
		{content: '< Time Picker Panel Sample', classes: 'g-sample-header', ontap: 'goBack'},

		{content: 'Time Picker Panel', classes: 'g-sample-subheader'},
		{style: 'position: relative; height: 100%', components: [
			{
				name: 'timePicker12Panel',
				kind: TimePicker12Panel,
				style: 'background-color: #000000; position: relative; display: inline-block; overflow: hidden;'
			},
			{
				name: 'timePicker24Panel',
				kind: TimePicker24Panel,
				style: 'background-color: #000000; position: relative; display: inline-block; margin-left: ' + ri.scale(10) + 'px; overflow: hidden;'
			}
		]},

		{src: '@../assets/btn_command_next.svg', classes: 'g-sample-result', components: [
			{content: 'Result', classes: 'g-sample-subheader'},
			{name: 'result', allowHtml: true, content: 'No button pressed yet.', classes: 'g-sample-description'}
		]}
	],
	bindings: [
		{from: '.$.timePicker12Panel.value', to: '.$.result.content', transform: function(val) {
			return 'Time is ' + val.hour + ':' + val.minute + ' ' + val.meridiem;
		}}
	],
	goBack: function(inSender, inEvent) {
		global.history.go(-1);
		return false;
	}
});
