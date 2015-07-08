var
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

var
    Component = require('enyo/Component');

var def = {
    kind: Component,
    width: 0,
    height: 0,
    create: kind.inherit(function(sup) {
        return function() {
            sup.apply(this, arguments);

            //set styling to keep parity with qt for this experiment
            if (platform.platformName != 'node') {
                var style = this.getStyle();
                style += 'left:' + this.left + 'px; top:' + this.top + 'px;height:' + this.height + 'px; width:' + this.width + 'px;position:absolute;display:block;';
                this.setStyle(style)

                if (this.autoshow == false) {
                    this.hide();
                }
            }
        };
    })
};

if (platform.platformName == 'node') {
    //we will use a qt application
    def.kind = require('../core/qtWindow');
} else {
    //render in browser using enyo dom
    def.kind = require('enyo/Control');
    def.close = function() {
        this.hide();
    };
    def.show = function() {
        this.inherited(arguments);
    }
}

module.exports = kind(def);