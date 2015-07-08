/*
	a hybrid application kind.
	uses platform to determine which 'rasterizer' it should use when creating components.
	each smart component then determines how to represent itself in environment
*/
var
    kind = require('enyo/kind'),
    platform = require('enyo/platform'),
    utils = require('enyo/utils');

var
    app;

var
    def = {
        constructor: kind.inherit(function(sup) {
            return function() {
                sup.apply(this, arguments);
            };
        }),
        constructed: kind.inherit(function(sup) {
            return function() {
                sup.apply(this, arguments);
            };
        })
    };

if (platform.platformName == 'node') {
    //we will use a qt application
    app = require('../core/qtApp');
    def.kind = app;
} else {
    def.kind = require('enyo/Control');
}

var
    kind = require('enyo/kind');

//application kind for qt apps
module.exports = kind(def);