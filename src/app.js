var
	kind = require('enyo/kind');

var
	Application = require('./core/qtApp'),
	Window = require('./core/qtWindow'),
	Label = require('./ui/qtLabel');
	Image = require('./ui/qtImage');

module.exports = kind({
	kind: Application,
	components: [
		{kind: Window, width: 640, height: 480,  components:[
			{kind: Label, left:20, top:20, content: 'Hello World From Enyo!'},
			{kind: Image, left:20, top:35, src: 'resources/qimage.png'}
		]},
		{kind: Window, width: 640, height: 480,  components:[
			{kind: Label, left:20, top:20, content: 'Multiple Windows like a Boss!'}
		]},
	]	
});
