var
	kind = require('enyo/kind');

var
	Component = require('enyo/Component');

module.exports = kind({
	name: 'enyo.qtImage',
	kind: Component,
	left: 0,
	top: 0,
	src: '',
	create: kind.inherit(function (sup) {
		return function () {
			sup.apply(this, arguments);
			this.image = new this.window.app.qt.QImage(this.src);
			if(!this.image.isNull()){
				this.window.queue.push(function(p){
					p.drawImage(this.left, this.top, this.image);
				}.bind(this))
			} else {
				console.log('image is null');
			}	
		};
	})
});