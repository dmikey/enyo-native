/*

	qtImage provides a drawImage rountine to it's `owner` widget
	
	currently supports : left, top

*/

var
    kind = require('enyo/kind');

var
    Component = require('enyo/Component');

module.exports = kind({
    name: 'enyo.qtImage',
    kind: Component,
    left: 0,
    top: 0,
    src: '',
    create: kind.inherit(function(sup) {
        return function() {
            sup.apply(this, arguments);
			
			//create a new image
            this.image = new this.window.app.qt.QImage(this.src);
			
            if (!this.image.isNull()) {
				
				//get the image path and draw it
				//todo normalize and make window generic widget
                this.window.queue.push(function(p) {
					
					//draw image during this widgets draw cycle.
                    p.drawImage(this.left, this.top, this.image);
                }.bind(this))
            } else {
				
				//oops something happened
                console.log('image is null');
            }
        };
    })
});