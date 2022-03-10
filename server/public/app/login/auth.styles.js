(() => {
  angular.module("mainModule").factory("$authStylesFac", controller);

  function controller() {
    function cardSlide(closingSignIn) {
      const loginCard = document.getElementById("login-card");
      const signUpInfo = document.getElementById("signup-info");
      const loginInfo = document.getElementById("login-info");
      const signinContent = document.getElementById("signing-content");
      const signupContent = document.getElementById("signup-content");
      const bg = document.getElementById("auth-bg");
      const header = document.getElementById("auth-header");

      if (bg.classList.contains("change-bg-red")) {
        bg.classList.remove("change-bg-red");
        bg.classList.toggle("change-bg-blue");
        header.classList.remove("change-bg-blue");
        header.classList.toggle("change-bg-red");
      } else {
        bg.classList.remove("change-bg-blue");
        bg.classList.toggle("change-bg-red");
        header.classList.remove("change-bg-red");
        header.classList.toggle("change-bg-blue");
      }

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
    }

    return {
      cardSlide: cardSlide,
    };
  }
})();
