var
	kind = require('enyo/kind');

var
	Component = require('enyo/Component');

module.exports = kind({
	name: 'enyo.qtLabel',
	kind: Component,
	content: '',
	left: 20,
	top: 30,
	events: {
		onDraw: ''
	},
	create: kind.inherit(function (sup) {
		return function () {
			sup.apply(this, arguments);
			
			var content = this.content;
			var left = this.left;
			var top = this.top;
			this.window.queue.push(function(p){
				p.drawText(left, top, content);
			})
		};
	})
});