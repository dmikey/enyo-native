var
    enyo = require('enyo'),
    kind = require('enyo/kind'),
    platform = require('enyo/platform');

var
    Application = require('./smartui/app');

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
        this.$.splash.close();
        this.$.drawing.show();
    }
});