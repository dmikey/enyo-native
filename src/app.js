var
    kind = require('enyo/kind');

var
    Application = require('./core/qtApp'),
    Window = require('./core/qtWindow'),
    Label = require('./ui/qtLabel'),
    Image = require('./ui/qtImage'),
    Sound = require('./ui/qtSound'),
    Pixmap = require('./ui/qtPixmap'),
    Color = require('./ui/qtColor');

//example of a pixmap fill
//create a standalone so that the pixmap
//control owns the `fill`
var
    colorPixmap = kind({
        kind: Pixmap,
        width: 125,
        height: 125,
        left: 30,
        top: 200,
        components: [{
            name: 'fill',
            kind: Color,
            r: 255,
            g: 0,
            b: 0
        }]
    });

module.exports = kind({
    kind: Application,
    components: [{
        kind: Window,
        width: 640,
        height: 480,
        components: [{
                kind: Label,
                left: 20,
                top: 20,
                content: 'Hello World From Enyo!'
            }, {
                kind: Image,
                left: 20,
                top: 35,
                src: 'resources/beanbird.png'
            }, {
                kind: Sound,
                autoPlay: false,
                src: 'resources/answer.wav'
            }, {
                kind: colorPixmap
            }

        ]
    }]
});