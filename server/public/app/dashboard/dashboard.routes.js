(() => {
  angular.module("dashboardModule").factory("$childNavigate", routes);

  routes.$inject = ["$rootScope"];
  function routes($rootScope) {
    const localHistory = JSON.parse(localStorage.getItem("history"));
    let history = [];

    if (localHistory) {
      history = localHistory.length > 0 ? localHistory : ["main"];
    } else {
      history = ["main"];
    }

    const manageHistory = (route) => {
      const tempHistory = history.filter((x) => x !== route);
      history = tempHistory;
      history.push(route);

      localStorage.setItem("history", JSON.stringify(history));
    };

    const backPage = () => {
      if (history.length === 1) {
        return history[history.length - 1];
      }
      history.pop();
      localStorage.setItem("history", JSON.stringify(history));
      return history[history.length - 1];
    };

    const naviagateToMain = () => {
      manageHistory("main");
      $rootScope.page = "main";
    };

    const naviagateToNewForm = () => {
      manageHistory("create-form");
      $rootScope.page = "create-form";
    };

    const naviagateToNewGroup = () => {
      manageHistory("create-group");
      $rootScope.page = "create-group";
    };

    const getLastSessionPage = () => {
      return history[history.length - 1];
    };
    return {
      naviagateToMain,
      naviagateToNewForm,
      backPage,
      getLastSessionPage,
      naviagateToNewGroup,
    };
  }
})();
