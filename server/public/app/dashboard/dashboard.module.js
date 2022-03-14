(() => {
  angular
    .module("dashboardModule", ["ngRoute", "ngMaterial"])
    .controller("mainCtrl", ctrl);
  ctrl.$inject = ["$rootScope", "$childNavigate", "$usersApi", "$scope"];
  function ctrl($rootScope, $childNavigate, $usersApi, $scope) {
    $rootScope.page = $childNavigate.getLastSessionPage();

    //GET CURRENT USER
    $usersApi.getCurrentUser().then(({ data }) => {
      $rootScope.current_user = data.data;
    });
  }
})();
