(function () {
  'use strict';
angular
  .module('meetupEvents')
  .factory('locationApi', function($resource) {

    var requestUri = 'https://api.foursquare.com/v2/venues/:action';

    return $resource(requestUri,
      {
        action: 'explore',
        client_id: FOURSQURE_API.CLIENT_ID,
        client_secret: FOURSQURE_API.CILENT_SECRET,
        v: FOURSQURE_API.VERSION,
        venuePhotos: '1',
        callback: 'JSON_CALLBACK'
      },
      {
        get: {method: 'JSONP'}
      });

  });
})();
