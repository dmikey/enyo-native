var
    kind = require('enyo/kind');

var
    Component = require('enyo/Component');

module.exports = kind({
    name: 'enyo.qtPixmap',
    kind: Component,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    create: kind.inherit(function(sup) {
        return function() {

            //create a new pixmap
            this.pixmap = new this.window.app.qt.QPixmap(this.width, this.height);

            sup.apply(this, arguments);

            //if there is a fill object attached, then use it to get the fill
            if (this.$.fill) {
                this.pixmap.fill(this.$.fill.get('fill'));
            }

            //add this to the window draw queue
            this.window.queue.push(function(p) {
                p.drawPixmap(this.left, this.top, this.pixmap);
            }.bind(this))
        };
    }),
    adjustComponentProps: kind.inherit(function(sup) {
        return function(props) {
            //pass qt down to children, seems to be a continuing theme
            //might just want to create a base kind
            sup.apply(this, arguments);
            props.qt = this.window.app.qt;
            props.pixmap = this;
        };
    }),
});