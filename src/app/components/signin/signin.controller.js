(function () {
  'use strict';
  angular
    .module('meetupEvents')
    .controller('SigninController', SigninController);

  /** @ngInject */
  function SigninController(Auth, $state) {
    var vm = this;

    $("#email").focus();

    vm.submitFrom = function () {


      if(Auth.isLoggedIn(vm.email)){
        $state.go('home');
      }
      else {
        var userCredentials = {
          email : vm.email,
          pass : vm.pass
        };

        var message = Auth.signin(userCredentials);

        if (message === "Registered"){
          $state.go('home');
        } else {
          vm.statusMSG = "You are not Registered. Kindly Sign Up.";
        }

      }
    }
  }
})();
