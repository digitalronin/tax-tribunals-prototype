(function() {
  'use strict';

  var moj = {

    Modules: {},

    Helpers: {},

    Events: $({}),

    init: function() {
      for (var x in moj.Modules) {
        if (typeof moj.Modules[x].init === 'function') {
          moj.log('Initialising "' + x + '" module');
          moj.Modules[x].init();
        }
      }
      // trigger initial render event
      moj.Events.trigger('render');
    },

    // safe logging
    log: function(msg) {
      if (window && window.console) {
        window.console.log(msg);
      }
    },
    dir: function(obj) {
      if (window && window.console) {
        window.console.dir(obj);
      }
    },

    ucFirst: function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

  };

  window.moj = moj;
}());
