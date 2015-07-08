var
    kind = require('enyo/kind');

var
    Component = require('enyo/Component');

module.exports = kind({
    name: 'enyo.qtPainter',
    kind: Component,
    backgroundColor: 0,
    backgroundLeft: 0,
    backgroundTop: 0,
    backgroundHeight: 0,
    backgroundWidth: 0,
    create: kind.inherit(function(sup) {
        return function() {
            this.queue = [];
            sup.apply(this, arguments);
            console.log('painter');
            this.painter = new this.qt.QPainter();
            this.painter.begin(this.pixmap.pixmap);

            this.pixmap.window.queue.push(function(p) {
                this.painter.fillRect(this.backgroundLeft, this.backgroundTop, this.backgroundWidth, this.backgroundHeight, this.backgroundColor);

                //iterate over the paint queue from child components
                for (var i = 0; i < this.get('queue').length; i++) {
                    this.get('queue')[i](this.painter);
                }

                p.drawPixmap(this.left, this.top, this.pixmap.pixmap);
            }.bind(this))


            //this.pixmap.window.widget.update();
        };
    }),
    paint: function(left, top, height, width, color) {
        this.queue.push(function(p) {
            p.fillRect(left, top, height, width, color);
        }.bind(this));
    },
    paintMouseEvent: function(event) {
        this.queue.push(function(p) {
            p.fillRect(event.x(), event.y(), 10, 10, 9);
        }.bind(this));
    }
});