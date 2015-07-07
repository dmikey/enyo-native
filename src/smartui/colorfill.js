var
	kind = require('enyo/kind'),
	platform = require('enyo/platform');

var def = {
	name: 'enyo.smartColorfill',
	create: kind.inherit(function (sup) {
		return function () {
			sup.apply(this, arguments);
			
			//impliment a simple pixmap fill
		    if (platform.platformName != 'node') {
				this.setStyle('background:rgb('+ this.r + ', ' + this.g + ',' + this.b + ');display:block;height:100%;width:100%;position:relative;')
		   }
		};
	})
};

if (platform.platformName == 'node') {
    //we will use a qt application
    def.kind = require('../ui/qtColor');
} else {
	def.kind = require('enyo/Control');
}

module.exports = kind(def);