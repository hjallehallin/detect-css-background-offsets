  /**
   * Detects browser support for css background position offsets
   * from all edges
   *
   * http://caniuse.com/#feat=css-background-offsets
   *
   */

  /**
   * Setup for use with AMD, CommonJs and Browser
   */

  (function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
      define(factory);
    } else if (typeof exports === 'object') {
      module.exports = factory();
    } else {
      root.detectCssBackgroundOffsets = factory();
    }

  }(this, function () {
    'use strict';
    var div = document.createElement('div'),
        pos = 'right 4px bottom 4px';

    return function() {
      div.style.backgroundPosition = pos;
      return div.style.backgroundPosition === pos || false;
    };
  }));
