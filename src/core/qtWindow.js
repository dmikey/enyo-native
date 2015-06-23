var
	kind = require('enyo/kind');

var
	Component = require('enyo/Component');

module.exports = kind({
	kind: Component,
	width: 640,
	height: 480,
	create: kind.inherit(function (sup) {
		return function (props) {
			this.queue = [];
			sup.apply(this, arguments);
			//create a window for which ever app process owns this
			
			this.window = new this.app.qt.QWidget;
			this.window.resize(this.width, this.height);
			this.window.show();		
			
			this.window.paintEvent(function(){
		
				var p = new this.app.qt.QPainter();
				p.begin(this.window);
				
				for (var i = 0; i < this.get('queue').length; i++) { 
					this.get('queue')[i].apply(this, [p]);
				}	
			
				p.end();
				
			}.bind(this));
		};
	}),
	adjustComponentProps: kind.inherit(function (sup) {
		return function (props) {
			props.window = this;
			sup.apply(this, arguments);
		};
	})
});