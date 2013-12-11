
;(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            'jquery', 'lib/<%= componentName %>'
        ], function(jQuery, <%= componentClassName %>) {
            root.jQuery = factory(jQuery);
            return root.jQuery;
        });
    } else {
        // Browser globals
        root.jQuery = factory(root.jQuery, root.<%= componentClassName %>);
    }
}(this, function($, <%= componentClassName %>) {
    'use strict';

    var pluginName = '<%= componentName %>',
        defaults = {
        };

    function build(options, elem) {
        var obj = new <%= componentClassName %>().init(options, elem);

        // Public API

        return {
            run: function() {
                // Do something
            }
        };
    }

    // Plugin definition

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, pluginName)) {
                var opts = asimov.core.mergeElementData(
                    $(this),
                    pluginName,
                    $.extend(true, {}, defaults, options)
                );

                $.data(this, pluginName, build(opts, this));
            }
        });
    };

    return $;

}));
