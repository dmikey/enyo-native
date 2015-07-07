var
	kind = require('enyo/kind'),
	platform = require('enyo/platform');

var
	Component = require('enyo/Component');

var def = {
	kind: Component,
	width: 0,
	height: 0
};

if (platform.platformName == 'node') {
    //we will use a qt application
    def.kind = require('../core/qtWindow');
} else {
	//render in browser using enyo dom
	def.kind = require('enyo/Control');
}

module.exports = kind(def);