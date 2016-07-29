(function (angular) {

  angular
    .module('meetupEvents')
    .service('session', sessionService);

  function sessionService($log, localStorage){

    // Instantiate data when service
    // is loaded
    this._user = JSON.parse(localStorage.getItem('session.user'));

    this.getUser = function(email){
      if (this._user == email)
        return this._user;
      else
        return;
    };

    this.setUser = function(user){
      this._user = user;
      localStorage.setItem('session.user', JSON.stringify(user));
      return this;
    };

    this.setEvent = function(event){
      localStorage.setItem('session.event', JSON.stringify(event));
      return this;
    };

    this.getAllEvents = function(){
      return localStorage;
    };

    /**
     * Destroy session
     */
    this.destroy = function destroy(){
      this.setUser(null);
    };

  }


})(angular);
