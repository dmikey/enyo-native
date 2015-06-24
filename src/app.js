var
	kind = require('enyo/kind');

var
	Application = require('./core/qtApp'),
	Window = require('./core/qtWindow'),
	Label = require('./ui/qtLabel'),
	Image = require('./ui/qtImage'),
	Sound = require('./ui/qtSound');

module.exports = kind({
	kind: Application,
	components: [
		{kind: Window, width: 640, height: 480,  components:[
			{kind: Label, left:20, top:20, content: 'Hello World From Enyo!'},
			{kind: Image, left:20, top:35, src: 'resources/qimage.png'},
			{name: 'sound', kind: Sound, autoPlay: true, src: 'resources/answer.wav'},
		]}
	]
});
