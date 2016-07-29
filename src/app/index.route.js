(function() {
  'use strict';

  angular
    .module('meetupEvents')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/events/events.html',
        controller: 'eventsController',
        controllerAs: 'events'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/components/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/components/signin/signin.html',
        controller: 'SigninController',
        controllerAs: 'vm'
      })
      .state('signout', {
        url: '/signin',
        controller: 'SignoutController'
      })
      .state('createEvent', {
        url: '/createEvent',
        templateUrl: 'app/components/createEvent/createEvent.html',
        controller: 'createEventCtrl',
        controllerAs: 'vm',
        resolve: {

          currentAuth: ["Auth", function (Auth) {
            return Auth.isLoggedIn('john@doe.com');
          }]

        }
      });

    $urlRouterProvider.otherwise('/createEvent/');
  }

})();
