(() => {
  angular.module("dashboardModule").factory("$usersApi", service);

  service.$inject = ["$tokenFactory", "$http"];
  function service($tokenFactory, $http) {
    $http.defaults.headers.common.Authorization =
      $tokenFactory.getBearerToken();

    function getCurrentUser() {
      return $http.get("/api/users");
    }

    return {
      getCurrentUser,
    };
  }
})();
