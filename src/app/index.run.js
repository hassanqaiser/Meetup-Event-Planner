(function() {
  'use strict';

  angular
    .module('meetupEvents')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
