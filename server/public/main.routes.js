(() => {
  angular.module("mainModule").config(($routeProvider) => {
    $routeProvider.when("/", {
      template: "<h1>Funciona</h1>",
    });
  });
})();
