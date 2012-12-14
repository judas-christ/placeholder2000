/*
Placeholder 2000
https://github.com/judas-christ/placeholder2000
*/
(function (window, document, $) {
	'use strict';
    var DATA_KEY = 'ph2k';
    var NATIVE_SUPPORT = 'placeholder' in document.createElement('input');
	var DEFAULT_OPTIONS = { cssClass: 'placeholder', idPrefix: 'placeholder-input-' };
	var index = 0;
    function createPlaceholder(input, options) {
        var placeholder = input.data(DATA_KEY);
        if(!placeholder) {
            placeholder = new Placeholder(input, options);
            input.data(DATA_KEY, placeholder);
        }
        return placeholder;
    }
    function Placeholder(input, options) {
		var id = input.attr('id'); 
		if(!id) {
			id = options.idPrefix + (index++);
			input.attr('id', id);
		}
        this.label = $('<label />')
			.attr({ 'for': id, 'class': options.cssClass })
			.text(input.attr('placeholder'));
        this.input = input;
        input.before(this.label);
    }
    Placeholder.prototype = {
        show: function() {
            if(!this.input.val())
                this.label.show();
        },
        hide: function() {
            this.label.hide();
        }
    };
    $.fn.placeholder = function(options) {
		options = $.extend({}, DEFAULT_OPTIONS, options);
        return NATIVE_SUPPORT ? this : this.each(function(i, element) {
            var input = $(element);
            var placeholder = createPlaceholder(input, options);
            placeholder.show();
            input.focus(function() {
                placeholder.hide();
            }).blur(function() {
                placeholder.show();
            });
        });
    };
})(this, this.document, jQuery);