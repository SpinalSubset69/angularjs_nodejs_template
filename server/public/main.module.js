(() => {
  angular
    .module("mainModule", ["ngRoute", "ngMaterial"])
    .config(($mdThemingProvider) => {
      $mdThemingProvider
        .theme("default")
        .primaryPalette("blue")
        .accentPalette("red");
    });
})();
