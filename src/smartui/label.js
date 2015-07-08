var
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

var
    Component = require('enyo/Component');

var
    def = {
        name: 'enyo.smartLabel',
        kind: Component,
        content: '',
        left: 0,
        top: 0,
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
    def.kind = require('../ui/qtLabel');
} else {
    def.kind = require('enyo/Control');
}

module.exports = kind(def);