(function () {
  'use strict';
  angular
    .module('meetupEvents')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController(userManager, session, $state) {
    var vm = this;

    $("#username").focus();
    vm.pass_pattern = /(?=^.{8,}$)(?=.*\d)(?=.*[!_@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    vm.ph_numbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
    vm.message = null;
    vm.error = null;


    vm.add = function () {
      var user = {
          "username": vm.username,
          "email": vm.email,
          "pass":vm.pass,
          "phone":vm.phone
      };
      userManager.add(user);
      session.setUser(vm.email);
      $state.go('signin');
    };

  }
})();
