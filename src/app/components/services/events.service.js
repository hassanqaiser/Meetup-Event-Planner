'use strict';

/**
 * @ngdoc service
 * @name meetupEventsApp.events.service
 * @description
 * # events.service
 * Service in the meetupEventsApp.
 */
angular.module('meetupEvents')
  .service('events', function (session) {
    var vm = this;
    this.events = {};

    this.getAllEvents = function(){
      return vm.events;
    };

    this.add = function(event){
      vm.events[event.eventname + '_' + session._user] = event;
      //session.setEvent(event);
    };

    this.get = function(eventName){
      return vm.events[eventName + '_' + session._user];
    };

    this.remove = function(eventName){
      return delete vm.events[eventName + '_' + session._user];
    };
  });
