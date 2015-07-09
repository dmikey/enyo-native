/*

	qtPainter currently offers a static stroke on it's owner pixmap.
	qtPainter needs to be placed inside a pixmap which will own it.

*/

var
    kind = require('enyo/kind');

var
    Component = require('enyo/Component');

module.exports = kind({
    name: 'enyo.qtPainter',
    kind: Component,
	//some default `background` stuff
	//set on initialization
	//this is just a large rectangle passed
	//to the painter
    backgroundColor: 0,
    backgroundLeft: 0,
    backgroundTop: 0,
    backgroundHeight: 0,
    backgroundWidth: 0,
    create: kind.inherit(function(sup) {
        return function() {
			//init queue, no inherit
            this.queue = [];
			
			//run inherited sup
            sup.apply(this, arguments);

			//create a new painter for painting on a pixmap
            this.painter = new this.qt.QPainter();
			
			//this should be owned by a pixmap, grab it's pixmap
			//and paint on it, todo: guard something here eh?
            this.painter.begin(this.pixmap.pixmap);

			//this pixmap is owned by a window, and needs to be drawn within
			//it's paint cycle
            this.pixmap.window.queue.push(function(p) {
				
				//fill this rectangle with background color, and inital measure
                this.painter.fillRect(this.backgroundLeft, this.backgroundTop, this.backgroundWidth, this.backgroundHeight, this.backgroundColor);

                //iterate over the paint queue from child components
				//paint the strokes to the pixmap during the paint cycle
				//todo: test if these can be popped
                for (var i = 0; i < this.get('queue').length; i++) {
                    this.get('queue')[i](this.painter);
                }

				//once the pixmap has been painted, draw the pixmap in this draw cycle
                p.drawPixmap(this.left, this.top, this.pixmap.pixmap);
            }.bind(this));
			
        };
    }),
    paint: function(left, top, height, width, color) {
        this.queue.push(function(p) {
			//when painted push a `stroke` to the queue to draw in a paint cycle 
            p.fillRect(left, top, height, width, color);
        }.bind(this));
    },
    paintMouseEvent: function(event) {
        this.queue.push(function(p) {
			//translate a mouse event, into a paint call
            p.fillRect(event.x(), event.y(), 10, 10, event.paintColor);
        }.bind(this));
    }
});