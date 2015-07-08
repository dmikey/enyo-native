var
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

var def = {
    name: 'enyo.smartSound',
    create: kind.inherit(function(sup) {
        return function() {
            sup.apply(this, arguments);

            //impliment a simple pixmap fill
            if (platform.platformName != 'node') {


            }

        };
    })
};

if (platform.platformName == 'node') {
    //we will use a qt application
    def.kind = require('../ui/qtSound');
} else {
    def.kind = require('enyo/Audio');
}

module.exports = kind(def);