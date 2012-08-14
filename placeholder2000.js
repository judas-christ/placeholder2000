/*
Placeholder 2000
https://github.com/judas-christ/placeholder2000
*/
(function (window, document, $) {
    var DATA_KEY = 'ph2k';
    var NATIVE_SUPPORT = 'placeholder' in document.createElement('input');
    function createPlaceholder(input) {
        var placeholder = input.data(DATA_KEY);
        if(!placeholder) {
            placeholder = new Placeholder(input);
            input.data(DATA_KEY, placeholder);
        }
        return placeholder;
    }
    function Placeholder(input) {
        this.label = $('<label />').attr({'for':input.attr('id'),'class':'placeholder'}).text(input.attr('placeholder'));
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
    $.fn.placeholder = function() {
        return NATIVE_SUPPORT ? this : this.each(function(i, element) {
            var input = $(element);
            var placeholder = createPlaceholder(input);
            placeholder.show();
            input.focus(function() {
                placeholder.hide();
            }).blur(function() {
                placeholder.show();
            });
        });
    };
})(this, this.document, jQuery);