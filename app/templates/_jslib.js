/*jshint debug: true*/
;(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], function(jQuery) {
            root.<%=componentClassName %> = factory(jQuery);
            return root.<%=componentClassName %>;
        });
    } else {
        // Browser globals
        root.<%=componentClassName %> = factory(root.jQuery);
    }
}(this, function($) {
    'use strict';

    var <%=componentClassName %> = function() {};

    <%=componentClassName %>.prototype.init = function(options, elem) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;

        return this;
    };

    return <%= componentClassName %>;
}));
