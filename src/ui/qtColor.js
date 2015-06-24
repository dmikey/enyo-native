var
	kind = require('enyo/kind');

var
	Component = require('enyo/Component');

module.exports = kind({
	name: 'enyo.qtColor',
	kind: Component,
	r: 0,
	g: 0,
	b: 0,
	create: kind.inherit(function (sup) {
		return function () {
			sup.apply(this, arguments);
			this.fill = new this.qt.QColor(this.r, this.g, this.b);
		};
	})
});