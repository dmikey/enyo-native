var
	kind = require('enyo/kind'),
	platform = require('enyo/platform');

var def = {
	name: 'enyo.smartPixmap',
	create: kind.inherit(function (sup) {
		return function () {
		   sup.apply(this, arguments);
			
		   //impliment a simple pixmap fill
		   if (platform.platformName != 'node') {
				this.setStyle('left:' + this.left + 'px; top:' + this.top + 'px;height:' + this.height + 'px; width:' + this.width + 'px;position:absolute;display:block;')
		   }
			
		};
	}),
	paintMouseEvent: function(event) {
		if(this.$.fill && this.$.fill.paintMouseEvent) {
			this.$.fill.paintMouseEvent(event);	
		}
	}
};

if (platform.platformName == 'node') {
    //we will use a qt application
    def.kind = require('../ui/qtPixmap');
} else {
	def.kind = require('enyo/Control');
}

module.exports = kind(def);