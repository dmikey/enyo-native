var
	kind = require('enyo/kind');

var
	Component = require('enyo/Component');

module.exports = kind({
	name: 'enyo.qtSound',
	kind: Component,
	src: '',
	loops: 1,
	autoPlay: false,
	create: kind.inherit(function (sup) {
		return function () {
			sup.apply(this, arguments);
			this.sound = new this.window.app.qt.QSound(this.src);
			this.sound.setLoops(this.loops);
			if(this.autoPlay) {
				this.sound.play();
			}
		};
	}),
	play: function() {
		this.sound.play();
	}
});