/*

	qtLabel provides a drawText routine to the `owner` widget
	
	currently supports : left, top, content

*/

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

			//draw the text to the owner widget
			//todo: window -> widget
			//todo: add font support
            this.window.queue.push(function(p) {
                p.drawText(this.left, this.top, this.content);
            }.bind(this))
        };
    })
});