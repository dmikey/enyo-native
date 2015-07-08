var
    enyo = require('enyo'),
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

var
    Pixmap = require('../smartui/pixmap'),
    PainterFill = require('../smartui/painterfill'),
    Widget = require('../smartui/widget'),
    Window = require('../smartui/window');

var paintArea = kind({
    kind: Pixmap,
    width: 640,
    height: 480,
    components: [{
        name: 'fill',
        kind: PainterFill,
        backgroundColor: 10,
        backgroundWidth: 640,
        backgroundHeight: 480
    }]
});

module.exports = kind({
    kind: Window,
    autoshow: false,
    style: 'background: #eee;overflow:hidden',
    width: 640,
    height: 480,
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
    }],
    handleMouseUp: function(sender, event) {
        this.mousedown = false;
    },
    handleMouseMove: function(sender, event) {

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
        this.mousedown = true;
        if (this.$ && this.$.canvas && this.$.canvas.paintMouseEvent) {
            this.$.canvas.paintMouseEvent(event);
        }
        return true;
    },
});