(() => {
  angular.module("dashboardModule").controller("toolBar", ctrl);

  ctrl.$inject = ["$scope", "$childNavigate", "$mdSidenav"];
  function ctrl($scope, $childNavigate, $mdSidenav) {
    $scope.openSideNav = () => $mdSidenav("sidenavLeft").open();
    $scope.closeSideNav = () => $mdSidenav("sidenavLeft").close();

    $scope.onNavigateCreateForm = () => {
      $childNavigate.naviagateToNewForm();
      $scope.closeSideNav();
    };

    $scope.onNavigateMain = () => {
      $childNavigate.naviagateToMain();
      $scope.closeSideNav();
    };

    $scope.onNavigateCreateGroup = () => {
      $childNavigate.naviagateToNewGroup();
      $scope.closeSideNav();
    };
  }
})();
