(() => {
  angular
    .module("dashboardModule", ["ngRoute", "ngMaterial"])
    .controller("mainCtrl", ctrl);
  ctrl.$inject = ["$rootScope", "$childNavigate", "$usersApi"];
  function ctrl($rootScope, $childNavigate, $usersApi) {
    $rootScope.page = $childNavigate.getLastSessionPage();

    //GET CURRENT USER
    $usersApi.getCurrentUser().then(({ data }) => {
      $rootScope.current_user = data.data;
    });
  }
})();
