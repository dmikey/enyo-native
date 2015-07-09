/*

	qtSound provides a sound implimentation
	
	currently supports : autoplay [true|false], loop count(loops), src, play
	
	usage (where kind is type colorfill.js or painterfill.js):
	
		components: [{name:'fill', kind: }]
	
	todo: widgets fail when ownership is 3 deep

*/

var
    kind = require('enyo/kind');

var
    Component = require('enyo/Component');

module.exports = kind({
    name: 'enyo.qtSound',
    kind: Component,
    src: '',
    loops: 1,
    autoplay: false,
    create: kind.inherit(function(sup) {
        return function() {
            sup.apply(this, arguments);

            //create a new sound
            //note: sound currently doest not have a isNull() method
            //todo: impliment sound is null method, so work can be avoided
            this.sound = new this.window.app.qt.QSound(this.src);
            //set the sound loops, default is 1
            this.sound.setLoops(this.loops);
            if (this.autoplay) {
                //if this should autoplay play sound
                this.sound.play();
            }
        };
    }),
    play: function() {
        //play the sound attached to this instance.
        this.sound.play();
    }
});