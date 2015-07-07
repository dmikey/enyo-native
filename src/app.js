var
    kind = require('enyo/kind');

var
    Application = require('./smartui/app'),
    Label = require('./smartui/label'),
	Image = require('./smartui/image'),
	Pixmap = require('./smartui/pixmap'),
	Fill = require('./smartui/colorfill'),
	Sound = require('./smartui/sound'),
	Window = require('./smartui/window');

var pixmap = kind({kind: Pixmap, height: 150, width: 150, components:[
		{name:'fill', kind: Fill, r: 233, g: 155, b: 25}
]});

module.exports = kind({
    kind: Application,
	components: [
		{kind: Window, width: 640, height: 480, components:[
			{kind: Label, content: 'Heyyyyyy', left: 10, top: 20},
			{kind: Image, left: 20, top: 35, src: 'resources/beanbird.png'},
			{kind: pixmap, left: 30, top: 50},
			{kind: Sound, autoplay: true, src: 'resources/answer.wav'}
		]}
	]
});