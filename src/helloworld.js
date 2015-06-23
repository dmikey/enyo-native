var
	kind = require('enyo/kind');

var
	Application = require('./core/qtApp'),
	Window = require('./core/qtWindow'),
	Label = require('./ui/qtLabel');

module.exports = kind({
	kind: Application,
	components: [
		{name:'MyWindow', kind: Window, components:[
			{kind: Label, content: 'test'}
		]},
		{name:'MyWindowTwo', kind: Window},
	]
});
