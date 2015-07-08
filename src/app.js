var
	enyo = require('enyo'),
    kind = require('enyo/kind'),
	platform = require('enyo/platform');

var
    Application = require('./smartui/app'),
    Label = require('./smartui/label'),
	Image = require('./smartui/image'),
	Pixmap = require('./smartui/pixmap'),
	PainterFill = require('./smartui/painterfill'),
	Sound = require('./smartui/sound'),
	Widget = require('./smartui/widget'),
	Window = require('./smartui/window');

var paintArea = kind({kind: Pixmap, width: 640,  height: 480, components:[
	{name:'fill', kind: PainterFill, backgroundColor: 10, backgroundWidth: 640, backgroundHeight: 480}
]});

var platformName = platform.platformName;

module.exports = kind({
    kind: Application,
	components: [
		{name: 'splash', kind: Window, style:'background: #eee;overflow:hidden', width: 640, height: 480, components:[
			{kind: Image, left: 425, top: 300, src: 'resources/beanbirdhero.png'},
			{kind: Image, left: 15, top: 15, src: 'resources/lglogo.png'},
			{kind: Image, left: 75, top: 140, src: 'resources/logo.png'},
			{kind: Label, left: 20, top: 400, content: 'Current Platform: ' + platformName},
			{kind: Label, left: 20, top: 420, content: 'Enyo Version: ' + enyo.version},
			{kind: Label, left: 20, top: 440, content: 'Renderer: ' + (platformName == 'node' ? 'native qt' : 'web')},
			{kind: Widget, ontap: 'handleNew', style:'cursor: pointer;', width: 188, height: 49, top: 25, left: 440, components:[
				{kind: Image, src: 'resources/newdrawing.png'}
			]}
		]},
		{name: 'drawing', kind: Window, autoshow: false, style:'background: #eee;overflow:hidden', width: 640, height: 480, components:[
			{kind: Widget, width: 640, height: 480, onmousemove: 'handleMouseMove', onmousedown: 'handleMouseDown', onmouseup: 'handleMouseUp', components:[
				{name:'canvas', kind: paintArea}
			]}
		]}
	],
	handleMouseUp: function(sender, event) {
		this.mousedown = false;
	},
	handleMouseMove: function(sender, event){
		
		if(this.$ && this.$.canvas && this.$.canvas.paintMouseEvent) {
			if(platform.platformName != 'node') {
				if(this.mousedown) {
					this.$.canvas.paintMouseEvent(event);	
				}
			} else {
				this.$.canvas.paintMouseEvent(event);
			}
		}
		
		return true;
	},	
	handleMouseDown: function(sender, event){
		this.mousedown = true;
		if(this.$ && this.$.canvas && this.$.canvas.paintMouseEvent) {
			this.$.canvas.paintMouseEvent(event);
		}
		return true;
	},
	handleNew: function() {
		this.$.splash.close();
		this.$.drawing.show();
	}
});