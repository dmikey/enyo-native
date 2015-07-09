/*
	a hybrid application kind.
	uses platform to determine which 'rasterizer' it should use when creating components.
	each smart component then determines how to represent itself in environment
*/

var
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

var
    app;

var
    def = {};

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