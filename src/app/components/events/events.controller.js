(function() {
  'use strict';

  angular
    .module('meetupEvents')
    .controller('eventsController', eventsController);

  /** @ngInject */
  function eventsController(events, session, $state) {
    var vm = this;

    if(session._user === null){
        $state.go('signin');
    }

    vm.events = events.getAllEvents();

  }
})();
