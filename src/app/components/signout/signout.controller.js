(function () {
  'use strict';
  angular
    .module('meetupEvents')
    .controller('SignoutController', SignoutController);

  /** @ngInject */
  function SignoutController(Auth) {
      Auth.signOut();
  }
})();
