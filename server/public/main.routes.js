(() => {
  angular.module("mainModule").config(($routeProvider) => {
    $routeProvider.when("/", {
      template: "<h1>MAIN ROUTE</h1>",
    });
  });
})();
