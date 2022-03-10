(() => {
  angular.module("dashboardModule").component("card", {
    templateUrl: "/views/components/infoCard.html",
    bindings: {
      statistics: "=",
    },
  });
})();
