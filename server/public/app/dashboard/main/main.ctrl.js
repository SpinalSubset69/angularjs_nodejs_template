(() => {
  angular.module("dashboardModule").controller("mainController", ctrl);

  ctrl.$inject = ["$scope", "$usersApi"];
  function ctrl($scope, $usersApi) {
    $usersApi.getCurrentUser().then(({ data }) => {
      $scope.user = data.data;
      $scope.statistics = getStatistics();
    });
    //TODO: FIND A WAY TO LISTEN ON $ROOTSCOPE CHANGES
    function getStatistics() {
      const data = $scope.user.answers;
      const total_forms = data.length;
      const grades = data.map((x) => x.grade);

      const total_grade =
        grades.reduce((prev, current) => prev.grade + current.grade) /
          data.length +
        "";

      let total_approved = 0;
      let total_not_approved = 0;
      grades.forEach((x) => {
        if (x >= 6) {
          total_approved++;
        } else {
          total_not_approved++;
        }
      });

      return {
        total_forms,
        total_grade: total_grade.substring(0, 5),
        total_approved,
        total_not_approved,
      };
    }
  }
})();
