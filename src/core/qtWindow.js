/*

	qtWindow kind is really just widget. infact it was created before the generic
	need for a widget, and thus should be rewritten to use qtWidget owned by the app
	
*/

var
    kind = require('enyo/kind');

var
    Component = require('enyo/Component');

module.exports = kind({
    kind: Component,
    width: 0,
    height: 0,
    create: kind.inherit(function(sup) {
        return function(props) {
            //init a new queue for this window to paint 
            //its components from
            this.queue = [];

            //create a window for which ever app process owns this
            this.window = new this.app.qt.QWidget;

            sup.apply(this, arguments);

            //set the dimensions of the window
            this.window.resize(this.width, this.height);

            //this is the windows paint event
            this.window.paintEvent(this.paintEvent.bind(this));

            if (this.autoshow != false) {
                //show the window
                this.window.show();
            }
        };
    }),
    paintEvent: function() {
        //create a painter to draw with
        //should this be cached?
        var p = new this.app.qt.QPainter();

        //begin the paint
        p.begin(this.window);

        //iterate over the paint queue from child components
        for (var i = 0; i < this.get('queue').length; i++) {
            this.get('queue')[i](p);
        }

        //finish painting
        p.end();
    },
    adjustComponentProps: kind.inherit(function(sup) {
        return function(props) {
            props.window = this;
            sup.apply(this, arguments);
        };
    }),
    close: function() {
        this.window.close();
    },
    show: function() {
        this.window.show();
    }
});