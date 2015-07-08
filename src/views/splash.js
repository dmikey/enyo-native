var
    enyo = require('enyo'),
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

var
    Label = require('../smartui/label'),
    Image = require('../smartui/image'),
    Widget = require('../smartui/widget'),
    Window = require('../smartui/window');

var 
	platformName = platform.platformName;

module.exports = kind({
    kind: Window,
    style: 'background: #eee;overflow:hidden',
    width: 640,
    height: 480,
    components: [{
        kind: Image,
        left: 425,
        top: 300,
        src: 'resources/beanbirdhero.png'
    }, {
        kind: Image,
        left: 15,
        top: 15,
        src: 'resources/lglogo.png'
    }, {
        kind: Image,
        left: 75,
        top: 140,
        src: 'resources/logo.png'
    }, {
        kind: Label,
        left: 20,
        top: 400,
        content: 'Current Platform: ' + platformName
    }, {
        kind: Label,
        left: 20,
        top: 420,
        content: 'Enyo Version: ' + enyo.version
    }, {
        kind: Label,
        left: 20,
        top: 440,
        content: 'Renderer: ' + (platformName == 'node' ? 'native qt' : 'web')
    }, {
        kind: Widget,
        ontap: 'handleNew',
        style: 'cursor: pointer;',
        width: 188,
        height: 49,
        top: 25,
        left: 440,
		ontap: 'handleNew',
        components: [{
            kind: Image,
            src: 'resources/newdrawing.png'
        }]
    }],
	handleNew: function() {
		this.triggerHandler('onnew');
	}
});