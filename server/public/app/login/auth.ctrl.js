(() => {
  angular.module("mainModule").controller("authController", AuthCtrl);

  AuthCtrl.$inject = [
    "$scope",
    "$mdToast",
    "$authFactory",
    "$authStylesFac",
    "$location",
    "$tokenFactory",
  ];

  function AuthCtrl(
    $scope,
    $mdToast,
    $authFactory,
    $authStylesFac,
    $location,
    $tokenFactory
  ) {
    if ($tokenFactory.getToken()) {
      $location.path("/dashboard");
    }
    $scope.user = {
      user_name: "",
      email: "",
      phone: "",
      password: "",
    };
    $scope.signUp = () => {
      if (!validateUserForm()) return;
      $authFactory
        .createUser($scope.user)
        .then(({ data }) => {
          $authStylesFac.cardSlide(false);
          $scope.user.password = ""; //CLEAN PASSWORD
          showToast("User Created");
        })
        .catch((err) => {
          handleErrors(err.data.messages);
        });
    };

    $scope.login = () => {
      $authFactory
        .login({
          email: $scope.user.email,
          password: $scope.user.password,
        })
        .then(({ data }) => {
          $tokenFactory.saveToken(data.session.token);
          showToast("Welcome!!");
          $location.path("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          handleErrors(err.data.message);
        });
    };

    $scope.slideSignup = (arg) => {
      $authStylesFac.cardSlide(arg);
    };

    const validateUserForm = () => {
      if (!$scope.user.user_name) {
        showToast("Must Provide a User Name");
        return false;
      }

      if (!$scope.user.email) {
        showToast("Must Provide an Email");
        return false;
      }

      if (!$scope.user.phone_number) {
        showToast("Must Provide a Phone Number");
        return false;
      }

      if (!$scope.user.password) {
        showToast("Must Provide a Password");
        return false;
      }
      return true;
    };

    const showToast = (message) => {
      $mdToast.show(
        $mdToast
          .simple()
          .textContent(message)
          .position("top right")
          .hideDelay(3000)
      );
    };

    const handleErrors = (error) => {
      console.log(error);
      showToast(error);
    };
  }
})();
