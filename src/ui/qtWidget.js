var
	kind = require('enyo/kind');

var
	Component = require('enyo/Component');

module.exports = kind({
	name: 'enyo.qtWidget',
	kind: Component,
	left: 0,
	top: 0,
	width: 0,
	height: 0,
	create: kind.inherit(function (sup) {
		return function () {
			this.queue = [];
			
			sup.apply(this, arguments);
			
			this.widget = new this.window.app.qt.QWidget(this.window.window);
			
			this.widget.paintEvent(this.paintEvent.bind(this));
		};
	}),
	paintEvent: function(){
		//create a painter to draw with
		//should this be cached?
		var p = new this.app.qt.QPainter();

		//begin the paint
		p.begin(this.widget);

		//iterate over the paint queue from child components
		for (var i = 0; i < this.get('queue').length; i++) { 
			this.get('queue')[i](p);
		}	

		//finish painting
		p.end();
	},
	adjustComponentProps: kind.inherit(function (sup) {
		return function (props) {
			//pass qt down to children, seems to be a continuing theme
			//might just want to create a base kind
			props.window = this;
			props.qt = this.window.app.qt;
			sup.apply(this, arguments);
		};
	})
});