(() => {
  angular.module("mainModule").factory("$tokenFactory", tokens);

  function tokens() {
    function saveToken(token) {
      localStorage.setItem("token", token);
    }

    function getToken() {
      return localStorage.getItem("token");
    }

    function getBearerToken() {
      return "bearer " + localStorage.getItem("token");
    }

    return {
      saveToken,
      getToken,
      getBearerToken,
    };
  }
})();
