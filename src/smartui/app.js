var
    kind = require('enyo/kind'),
    platform = require('enyo/platform'),
    utils = require('enyo/utils');

var
    Component = require('enyo/Component');

var
    app;

var
    def = {
        kind: Component,
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