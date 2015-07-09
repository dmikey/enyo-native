/*

	qtColor is a `fill` type object. It fills an `owner` pixmap. 
	qtColor needs to be placed inside an owner pixmap and will fill
	
	currently supported: rgb

*/

var
    kind = require('enyo/kind');

var
    Component = require('enyo/Component');

module.exports = kind({
    name: 'enyo.qtColor',
    kind: Component,
	
	//color values of this fill
    r: 0,
    g: 0,
    b: 0,
	
    create: kind.inherit(function(sup) {
        return function() {
            sup.apply(this, arguments);
			
			///create a color fill with these colors
            this.fill = new this.qt.QColor(this.r, this.g, this.b);
        };
    })
});