var
    kind = require('enyo/kind');

var
    Application = require('./smartui/app'),
    Label = require('./smartui/label'),
	Pixmap = require('./smartui/image'),
	Window = require('./smartui/window');

module.exports = kind({
    kind: Application,
	components: [
		{kind: Window, width: 640, height: 480, components:[
			{kind: Label, content: 'Heyyyyyy', left: 10, top: 20},
			{
                kind: Pixmap,
                left: 20,
                top: 35,
                src: 'resources/beanbird.png'
            }
		]}
	]
});