/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('meetupEvents')
    .constant('FOURSQURE_API', {
    	URL: 'https://api.foursquare.com/v2/venues/search?',
    	CLIENT_ID: 'KMNF2LPUCULO1DABUCQE1K4Z4MTMUA4NZTHVG5SFLIK2ZZAU',
    	CILENT_SECRET: 'HMOYG4V5JGPERQ5ACU3PHNW4SJA2SG0GCDM31OMHYYSFUZLN',
    	VERSION: '20160419'
    });

})();
