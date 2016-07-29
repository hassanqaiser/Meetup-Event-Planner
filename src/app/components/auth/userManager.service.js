// let's create a re-usable factory that generates the $firebaseAuth instance
angular
  .module('meetupEvents')
  .service('userManager',
    function () {
      var vm = this;

      this.users = {
        "john@doe.com": {
          "username": "John Doe",
          "email": "john@doe.com",
          "pass":"pass",
          "birthday":"",
          "employer":"",
          "jobTitle":""
        }
      };

      this.add = function(user){
        vm.users[user.email] = user;
      };

      this.get = function(email){
        return vm.users[email];
      };

      this.remove = function(email){
        return delete vm.users[email];
      };

    }
  );
