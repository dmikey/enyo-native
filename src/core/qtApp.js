/*

	qtApp kind, this starts a qt PID that this app can interface with through the v8 bridge.
	this app will own other components. Currently supported with this POC is really a widget 
	for UI. 
	
*/

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
    constructor: kind.inherit(function(sup) {
        return function() {
	 		this.qt = require(qt);
        	this.app = new this.qt.QApplication();
		sup.apply(this, arguments);
        };
    }),
    constructed: function() {
        this.inherited(arguments);
        setInterval(function() {
            this.app.processEvents();
        }.bind(this), 100);
    },
    adjustComponentProps: kind.inherit(function(sup) {
        return function(props) {
            props.app = this;
            sup.apply(this, arguments);
        };
    })
});