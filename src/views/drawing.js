
var
    enyo = require('enyo'),
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

var
    Image = require('../smartui/image'),
    Pixmap = require('../smartui/pixmap'),
    PainterFill = require('../smartui/painterfill'),
    Widget = require('../smartui/widget'),
    Window = require('../smartui/window');

var
    toolbar = require('../widgets/toolbar'),
	colors = require('../models/colors');

var paintArea = kind({
    kind: Pixmap,
    width: 640,
    height: 480,
    components: [{
        name: 'fill',
        kind: PainterFill,
        backgroundColor: 3,
        backgroundWidth: 640,
        backgroundHeight: 480
    }]
});

module.exports = kind({
    kind: Window,
    autoshow: false,
    style: 'background: #eee;overflow: hidden;border: solid 1px #ccc;',
    width: 640,
    height: 480,
	paintColor: 8,
    components: [{
        kind: Widget,
        width: 640,
        height: 480,
        components: [{
            name: 'canvas',
            kind: paintArea,

        }],
        onmousemove: 'handleMouseMove',
        onmousedown: 'handleMouseDown',
        onmouseup: 'handleMouseUp'
    },{
		name: 'toolbar',
        kind: toolbar,
		width: 640,
		height: 50,
		ontap: 'handleColor'
    }],
	handleColor: function(sender, event) {
		var x = event.clientX || event.x();
		var colorkey  =  this.$.toolbar.getColorByX(x);
		this.paintColor = Number(colors[colorkey].index);
	},
    handleMouseUp: function(sender, event) {
        this.mousedown = false;
    },
    handleMouseMove: function(sender, event) {
		
		event.paintColor = this.paintColor;

        if (this.$ && this.$.canvas && this.$.canvas.paintMouseEvent) {
            if (platform.platformName != 'node') {
                if (this.mousedown) {
                    this.$.canvas.paintMouseEvent(event);
                }
            } else {
                this.$.canvas.paintMouseEvent(event);
            }
        }

        return true;
    },
    handleMouseDown: function(sender, event) {
		
		event.paintColor = this.paintColor;
        this.mousedown = true;
        if (this.$ && this.$.canvas && this.$.canvas.paintMouseEvent) {
            this.$.canvas.paintMouseEvent(event);
        }
        return true;
    },
});