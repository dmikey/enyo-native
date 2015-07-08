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
			//the widget will have it's own draw queue
			this.queue = [];
			
			//create a new widget that belongs to the current window
			this.widget = new this.window.app.qt.QWidget(this.window.window);
			
			//process the create
			sup.apply(this, arguments);
			
			//set the dimensions of the widget
			this.widget.resize(this.width, this.height);
			
			//set the position of the widget
			this.widget.move(this.left, this.top);
			
			//set up events if we need them
			this.widget.mousePressEvent(function(e) {
	 		  this.dispatchEvent('onmousedown', e, this);
	 		  this.dispatchEvent('ontap', e, this);
			  this.widget.update();
			}.bind(this));
			
			this.widget.mouseMoveEvent(function(e) {
			  this.dispatchEvent('onmousemove', e, this);
			  this.widget.update();
			}.bind(this));

			//setup the widget paint event
			this.widget.paintEvent(this.paintEvent.bind(this));
			
			this.widget.show();
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