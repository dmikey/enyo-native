var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	Component = require('enyo/Component');


//use a native node module, and avoid enyo
//path re-writes
var qt = 'node-qt';

//application kind for qt apps
module.exports = kind({
	kind: Component,
	constructor: function(){
		this.inherited(arguments);
		this.qt = require(qt);
		this.app = new this.qt.QApplication();
	},
	constructed: function() {
		this.inherited(arguments);
		setInterval(function() {
		  this.app.processEvents();
		}.bind(this), 100);
	},
	adjustComponentProps: kind.inherit(function (sup) {
		return function (props) {
			props.app = this;
			sup.apply(this, arguments);
		};
	})
});