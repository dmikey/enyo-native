var
	kind = require('enyo/kind'),
	platform = require('enyo/platform');


//simple map for now against some of the colors we'll offer from qt
var 
	colors = {
		'8': '#00ff00',
		'9': '#0000ff',
		'10': '#00ffff',
		'3': '#ffffff'
	}

var def = {
	name: 'enyo.smartPainterfill',
	create: kind.inherit(function (sup) {
		return function () {
			sup.apply(this, arguments);
			
			//impliment a simple pixmap fill
		    if (platform.platformName != 'node') {
				this.setStyle('background-color:' + colors[this.backgroundColor] + ';left:' + this.backgroundLeft + 'px; top:' + this.backgroundTop + 'px;height:' + this.backgroundHeight + 'px; width:' + this.backgroundWidth + 'px;position:absolute;display:block;')
			}
		};
	}),
};

if (platform.platformName == 'node') {
    //we will use a qt application
    def.kind = require('../ui/qtPainter');
} else {
	def.kind = require('enyo/Control');
	def.paint = function(left, top, height, width, color){
		var d = document.createElement('div');
		
		d.style.background = '#ffffff';
		d.style.height = '10px';
		d.style.width = '10px';
		d.style.top = top + 'px';
		d.style.left = left + 'px';
		d.style.position = "absolute";
		d.style.display = "block";
		
		this.hasNode().appendChild(d);		
	};
	def.paintMouseEvent = function(sender, event){
		var event = event || sender;
		this.paint(event.clientX, event.clientY);
	};
}

module.exports = kind(def);