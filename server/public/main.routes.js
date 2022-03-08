(() => {
  angular.module("mainModule").config(($routeProvider) => {
    $routeProvider.when("/", {
      templateUrl: "./app/login/login.html",
    });
  });
})();
