(() => {
  angular.module("mainModule").config(($routeProvider) => {
    $routeProvider
      .when("/", {
        templateUrl: "./app/login/auth.html",
      })
      .when("/dashboard", {
        templateUrl: "./app/dashboard/dashboard.html",
      });
  });
})();
