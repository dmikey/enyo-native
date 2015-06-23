var
	kind = require('enyo/kind');

var
	Component = require('enyo/Component');

module.exports = kind({
	kind: Component,
	width: 0,
	height: 0,
	create: kind.inherit(function (sup) {
		return function (props) {
			//init a new queue for this window to paint 
			//its components from
			this.queue = [];
			
			sup.apply(this, arguments);
			//create a window for which ever app process owns this
			this.window = new this.app.qt.QWidget;
			//set the dimensions of the window
			this.window.resize(this.width, this.height);
				
			//this is the windows paint event
			this.window.paintEvent(this.paintEvent.bind(this));
			
			//show the window
			this.window.show();	
		};
	}),
	paintEvent: function(){
		//create a painter to draw with
		//should this be cached?
		var p = new this.app.qt.QPainter();

		//begin the paint
		p.begin(this.window);

		//iterate over the paint queue from child components
		for (var i = 0; i < this.get('queue').length; i++) { 
			this.get('queue')[i](p);
		}	

		//finish painting
		p.end();
	},
	adjustComponentProps: kind.inherit(function (sup) {
		return function (props) {
			props.window = this;
			sup.apply(this, arguments);
		};
	})
});