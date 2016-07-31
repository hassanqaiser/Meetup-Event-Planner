(function () {
  'use strict';

angular
  .module('meetupEvents')
  .service("Auth",['userManager', '$state','session',
    function (userManager, $state, session) {
      /**
    * Check whether the user is logged in
    * @returns boolean
    */
    this.isLoggedIn = function isLoggedIn(email){
      return session.getUser(email) !== undefined;
    };

    /**
    * Log in
    *
    * @param credentials
    * @returns {*|Promise}
    */
    this.signin = function(credentials){
      var user = userManager.get(credentials.email);
      if(user !== undefined){
        session.setUser(credentials.email);
        return "Registered";
      } else {
        return "Not Registered";
      }
    };

    /**
    * Log out
    *
    * @returns {*|Promise}
    */
    this.signOut = function(){
      //if(session._user)session.destroy();
      $state.go('signin');
    };


    }
  ]);


  })();
