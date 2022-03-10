(() => {
  angular.module("mainModule").factory("$authFactory", authController);

  authController.$inject = ["$http"];
  function authController($http) {
    function createUser(data) {
      return $http.post("/api/users", data);
    }

    function login(data) {
      return $http.post("/api/auth/login", data);
    }

    return {
      createUser,
      login,
    };
  }
})();
