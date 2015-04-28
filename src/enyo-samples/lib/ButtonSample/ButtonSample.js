var
	kind = require('enyo/kind');

var
	Button = require('enyo/Button'),
	Group = require('enyo/Group'),
	Image = require('enyo/Image');


/*
	Implementation notes:
	-	We are utilizing inSender (as opposed to inEvent.originator) in our button tap handler
		as we need to normalize for the case of the image button that has a child component, and
		we are concerned with the top-level button itself.
*/
module.exports = kind({
	name: "enyo.sample.ButtonSample",
	classes: "button-sample",
	components: [
		{content: "Buttons", classes: "section"},
		{kind: Button, content: "Action Button", ontap: "buttonToggleTapped"},
		{kind: Button, name: "toggleButton", disabled: true, content: "Disabled Button", ontap: "buttonTapped"},
		{content: "Grouped Buttons", classes: "section"},
		{kind: Group, onActivate: "groupButtonsActivated", components: [
			{kind: Button, content: "Grouped Button 1"},
			{kind: Button, content: "Grouped Button 2"},
			{kind: Button, content: "Grouped Button 3"}
		]},
		{content: "Image Button", classes: "section"},
		{kind: Button, content: "Image Button", classes: "image-button", ontap: "buttonTapped", components: [
			{kind: Image, src: "http://enyojs.com/img/enyo-logo.png", alt: "Enyo Logo"}
		]},
		{name: "results", classes: "results"}
	],
	buttonTapped: function(inSender, inEvent) {
		this.updateResult({content: "The \"" + inSender.getContent() + "\" button is tapped."});
	},
	buttonToggleTapped: function(inSender, inEvent) {
		this.buttonTapped(inSender, inEvent);
		this.$.toggleButton.setDisabled(!this.$.toggleButton.getDisabled()).setContent(this.$.toggleButton.getDisabled() ? "Disabled Button" : "Enabled Button");
	},
	groupButtonsActivated: function(inSender, inEvent) {
		if (inEvent.originator.getParent().getActive()) {
			this.updateResult({content: "The \"" + inEvent.originator.getParent().getActive().getContent() + "\" button is selected."});
		}
	},
	updateResult: function(inComponent) {
		this.$.results.destroyClientControls();
		this.$.results.createComponent(inComponent);
		this.$.results.render();
	}
});
