(() => {
  angular.module("mainModule").controller("authController", AuthCtrl);

  AuthCtrl.$inject = ["$scope"];
  function AuthCtrl($scope) {
    $scope.slideSignup = (closingSignIn) => {
      const loginCard = document.getElementById("login-card");
      const signUpInfo = document.getElementById("signup-info");
      const loginInfo = document.getElementById("login-info");
      const signinContent = document.getElementById("signing-content");
      const signupContent = document.getElementById("signup-content");
      
      if (closingSignIn) {
        loginInfo.classList.toggle("disappear");
        setTimeout(() => {
          loginInfo.classList.toggle("fade");
          loginInfo.classList.toggle("invisible");
        }, 1200);
      }
      if (!closingSignIn) {
        loginInfo.classList.toggle("disappear");
        loginInfo.classList.toggle("fade");
        loginInfo.classList.toggle("invisible");
      }

      signinContent.classList.toggle("display-none");
      signinContent.classList.toggle("display-flex");
      signupContent.classList.toggle("display-none");
      signinContent.classList.toggle("fade");
      signupContent.classList.toggle("fade");
      signUpInfo.classList.toggle("disappear");
      loginCard.classList.toggle("translate-right");
    };
  }
})();
