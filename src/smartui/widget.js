var
	kind = require('enyo/kind'),
	platform = require('enyo/platform');

var def = {
	name: 'enyo.smartWidget',
	create: kind.inherit(function (sup) {
		return function () {
		   sup.apply(this, arguments);
			
		   //impliment a simple pixmap fill
		   if (platform.platformName != 'node') {
			   var style = this.getStyle();
			    style += 'left:' + this.left + 'px; top:' + this.top + 'px;height:' + this.height + 'px; width:' + this.width + 'px;position:absolute;display:block;'
				this.setStyle(style)
		   }
			
		};
	})
};

if (platform.platformName == 'node') {
    //we will use a qt application
    def.kind = require('../ui/qtWidget');
} else {
	//render in browser using enyo dom
	def.kind = require('enyo/Control');
}

module.exports = kind(def);