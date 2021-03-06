'use strict';

moj.Modules.formRoutes = {
  init: function() {
    var self = this;

    if($('form.js_route').length) {
      self.bindEvents();
    }
  },

  bindEvents: function() {
    var self = this,
        $form = $('form').eq(0);

    moj.log('js form routing');
    $form.on('submit', function(e) {
      e.preventDefault();

      if($form.hasClass('js_store_answers')) {
        moj.Modules.recordAnswers.recordAnswer($form);
      }

      moj.Modules.dataStore.checkForItemsToStore($form);
      self.checkRoute($form);
    });
  },

  checkRoute: function($form) {
    var self = this,
        $checkedDestinationButton = $form.find('input[type="radio"][data-destination]:checked').last(),
        nextPage;

    if($checkedDestinationButton.length) {
      nextPage = $checkedDestinationButton.data('destination');
    } else {
      nextPage = $form.attr('action');
    }

    self.next(nextPage);
  },

  next: function(page) {
    document.location = page;
  }
};
