/*
	
	Very simple demo of a simple paint app that will be rendered in both a Web Browser,
	and when outside of the browser using Qt, through a v8 bridge.
	
*/

var
    kind = require('enyo/kind');

var
    Application = require('./smartui/app');


//grab our two application views, i've made these windows 
//for the demo, the smartui widgets will treat as seperate divs
var
    splash = require('./views/splash'),
    drawing = require('./views/drawing');

module.exports = kind({
    kind: Application,
    components: [{
        name: 'splash',
        kind: splash,
        onnew: 'handleNew'
    }, {
        name: 'drawing',
        kind: drawing,
    }],
    handleNew: function() {
		//just simply hide the splash nothing fancy
        this.$.splash.close();
		//show the drawing area
        this.$.drawing.show();
    }
});