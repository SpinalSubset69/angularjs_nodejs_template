(() => {
  angular
    .module("mainModule", ["ngRoute", "ngMaterial", "dashboardModule"])
    .config(($mdThemingProvider) => {
      $mdThemingProvider
        .theme("default")
        .primaryPalette("blue")
        .accentPalette("red");
    });
})();
