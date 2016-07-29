'use strict';

/**
 * @ngdoc function
 * @name meetupEventsApp.controller:EventsControllerCtrl
 * @description
 * # EventsControllerCtrl
 * Controller of the meetupEventsApp
 */
angular.module('meetupEvents')
  .controller('createEventCtrl', ['$scope', '$http', 'FOURSQURE_API', '$state', 'events', 'distanceCalculator', function ($scope, $http, FOURSQURE_API, $state, events, distanceCalculator) {
    var vm = this;
		vm.location = '';

    vm.page = 1;
    vm.places = [];

    vm.add = function(){

    };
		// Item List Arrays
    vm.guests = [];

    vm.addGuest = function () {
      vm.guests.push(vm.guest);
      vm.guest = '';
    };

    vm.removeGuest = function (guest) {
      var index = vm.guests.indexOf(guest);
      vm.guests.splice(index, 1);
    }



  vm.searchVenue = function(){
		if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(function (position) {

        vm.localLat = position.coords.latitude;
        vm.localLng = position.coords.longitude;
				var apiUriParams = {
		      query: vm.location,
					client_id: FOURSQURE_API.CLIENT_ID,
					client_secret: FOURSQURE_API.CILENT_SECRET,
					v: FOURSQURE_API.VERSION,
					ll: vm.localLat + "," + vm.localLng
				};

		    var apiUri = Object.keys(apiUriParams).map(function (key) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(apiUriParams[key]);
				}).join('&');

		    $http.get(FOURSQURE_API.URL + apiUri)
					.success(function (data, statusCode) {
						// Successfull
						if (statusCode == 200) {
							vm.places = data.response.venues;
							// Loops through the venues to measure the distance from local location
							for (var i = 0; i < vm.places.length; i++) {
								vm.places[i].distance = distanceCalculator.get(vm.localLat, vm.localLng, vm.places[i].location.lat, vm.places[i].location.lng);
							}
						}

						// No result found!
						if (vm.places.length == 0) {
							vm.ResponseDetails = "No result found! Try (ex. Nordea, Burger, Coffee )";
						}
					})
					.error(function (data, status) {
						vm.ResponseDetails = "Bad Request:  " + status;
		        vm.places = [];
		        vm.totalRecordsCount = 0;
					});
		},
    function (error) {
      alert('Please share your location to get venue suggestions');
    }
  );
	}


  }
  $scope.$watch('vm.location', function (newValue, oldValue) {
		if (newValue != null) {
				vm.searchVenue();
		}
	});

	vm.createEvent = function(){
		events.add({
			eventname: vm.eventName,
			eventtype: vm.eventType,
			host: vm.hostedBy,
			start: vm.startDate.toString().substring(0, 21),
			finish: vm.endDate.toString().substring(0, 21),
			guests: vm.guests,
			location: vm.location,
			description: optional(vm.description)
		});

		function optional(field) {
			if (field) {
				return field;
			} else {
				return null;
			}
		}

		$state.go('home');

	};

  }]);
