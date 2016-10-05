'use strict';

moj.Modules.fileUpload = {
  fileElClass: 'default-file-upload',
  fileListWrapperClass: 'fileListWrapper',
  fileListClass: 'file-list',

  init: function() {
    var self = this,
        els = $('.' + self.fileElClass);

    if(els.length) {
      self.bindEvents(els);
    }
  },

  bindEvents: function(els) {
    var self = this;

    els.each(function(n, el) {
      var $el = $(el);

      $el.on('change', function() {
        var filename = self.getFilename($el);

        self.addFileToList(filename);
      });
    });
  },

  getFilename: function($el) {
    var arr = $el.val().split('\\');

    return arr[arr.length - 1];
  },

  addFileToList: function(filename) {
    var self = this;

    if($('.' + self.fileListClass).length === 0) {
      moj.log('no files yet');

    }
  }
};
