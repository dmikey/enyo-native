var 
	platform = require('enyo/platform');

var 
	App = require('./src/app');

var
	app = new App();


if(platform.platformName != 'node') {
	var ready = require('enyo/ready');
	ready(function(){
		app.renderInto(document.body);
	});
}