var
    kind = require('enyo/kind');

var
    Component = require('enyo/Component');

module.exports = kind({
    name: 'enyo.qtLabel',
    kind: Component,
    content: '',
    left: 0,
    top: 0,
    create: kind.inherit(function(sup) {
        return function() {
            sup.apply(this, arguments);

            this.window.queue.push(function(p) {
                p.drawText(this.left, this.top, this.content);
            }.bind(this))
        };
    })
});