var
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

def = {
    name: 'enyo.smartImage',
    create: kind.inherit(function(sup) {
        return function() {
            sup.apply(this, arguments);

            //this is for behavior parity with the qt stuff
            if (platform.platformName != 'node') {
                this.setStyle('left:' + this.left + 'px; top:' + this.top + 'px; position: absolute;');
            }
        };
    })
};

if (platform.platformName == 'node') {
    //we will use a qt application
    def.kind = require('../ui/qtImage');
} else {
    def.kind = require('enyo/Image');
}

module.exports = kind(def);