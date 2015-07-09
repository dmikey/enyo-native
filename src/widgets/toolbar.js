var
	kind = require('enyo/kind');

var
  	Image = require('../smartui/image'),
	Pixmap = require('../smartui/pixmap'),
	Widget = require('../smartui/widget'),
    Pixmap = require('../smartui/pixmap'),
    ColorFill = require('../smartui/colorfill');

var 
	background = kind({
		kind: Pixmap,
		width: 640,
		height: 50,
		components: [{
			name: 'fill',
			kind: ColorFill,
			r: 203,
			g: 203,
			b: 203,
			height: 640,
			width: 50
		}]
});

var 
	black = kind({
		kind: Pixmap,
		width: 50,
		height: 50,
		components: [{
			name: 'fill',
			kind: ColorFill,
			r: 0,
			g: 0,
			b: 0,
			height: 50,
			width: 50
		}]
});

var 
	blue = kind({
		kind: Pixmap,
		width: 50,
		height: 50,
		left: 50,
		components: [{
			name: 'fill',
			kind: ColorFill,
			r: 0,
			g: 0,
			b: 255,
			height: 50,
			width: 50
		}]
});

var 
	red = kind({
		kind: Pixmap,
		width: 50,
		height: 50,
		left: 100,
		components: [{
			name: 'fill',
			kind: ColorFill,
			r: 255,
			g: 0,
			b: 0,
			height: 50,
			width: 50
		}]
});

var 
	green = kind({
		kind: Pixmap,
		width: 50,
		height: 50,
		left: 150,
		components: [{
			name: 'fill',
			kind: ColorFill,
			r: 0,
			g: 255,
			b: 0,
			height: 50,
			width: 50
		}]
});

var 
	fucia = kind({
		kind: Pixmap,
		width: 50,
		height: 50,
		left: 200,
		components: [{
			name: 'fill',
			kind: ColorFill,
			r: 255,
			g: 0,
			b: 255,
			height: 50,
			width: 50
		}]
});

var 
	yellow = kind({
		kind: Pixmap,
		width: 50,
		height: 50,
		left: 250,
		components: [{
			name: 'fill',
			kind: ColorFill,
			r: 255,
			g: 255,
			b: 0,
			height: 50,
			width: 50
		}]
});

var 
	purple = kind({
		kind: Pixmap,
		width: 50,
		height: 50,
		left: 300,
		components: [{
			name: 'fill',
			kind: ColorFill,
			r: 128,
			g: 0,
			b: 128,
			height: 50,
			width: 50
		}]
});

module.exports = kind({
	kind: Widget,
	style: 'overflow:hidden;',
	components: [
		{kind: background},
		{kind: black},
		{kind: blue},
		{kind: red},
		{kind: green},
		{kind: fucia},
		{kind: yellow},
		{kind: purple},
		{
			kind: Image,
			left: 520,
			top: 0,
			src: 'resources/beanbirdfamilysm.png'
    	},
		{
			kind: Image,
			left: 362,
			top: 6,
			src: 'resources/beanpaint.png'
    	}
	],
	getColorByX: function(x) {
		
		//this could be way cleaner, but
		//hackathon, get er done!
		var colors = [
			'black',
			'blue',
			'red',
			'green',
			'fucia',
			'yellow',
			'purple'
		];
		
		var colorIndex = Math.floor(x/50);
		var color = colors[colorIndex];
		
		if(color) {
			return color;
		} else {
			return colors[0];
		}
	}
});