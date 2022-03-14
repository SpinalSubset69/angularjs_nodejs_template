const questionsArray = []; //Global variable to bind dialog context with createFormController context

(() => {
  angular.module("dashboardModule").controller("createFormController", ctrl);

  ctrl.$inject = ["$scope", "$mdDialog"];
  function ctrl($scope, $mdDialog) {
    console.log(typeof this);
    $scope.test = "FUNCIONA";
    $scope.status = {
      summary: true,
      questions: true,
      group: true,
      progress: {
        questions: true,
      },
    };

    $scope.form = {
      summary: "",
      title: "",
      instructions: "",
      questions: questionsArray,
    };
    $scope.startStepper = () => {
      const div = document.getElementById("beginForm");
      div.classList.toggle("slide-out-rigth");
      setTimeout(() => {
        $scope.status.summary = false;
        $scope.steper = "summary";
        $scope.currentNavItem = "summary";
      }, 100);
    };

    $scope.onSummaryChange = () => {
      if ($scope.form.summary && $scope.form.instructions && $scope.form.title)
        $scope.status.progress.questions = false;
    };

    $scope.goto = (page) => {
      $scope.currentNavItem = page;
      $scope.steper = page;
    };

    $scope.navigation = (page) => {
      switch (page) {
        case "questions":
          $scope.status.questions = false;
          break;
        case "group":
          $scope.status.group = false;
      }
      $scope.steper = page;
      $scope.currentNavItem = page;
    };

    $scope.showCreateQuestionDialog = (ev) => {
      $mdDialog
        .show({
          controller: dialogController,
          templateUrl: "/views/components/add.question.dialog.html",
          // Appending dialog to document.body to cover sidenav in docs app
          // Modal dialogs should fully cover application to prevent interaction outside of dialog
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: false,
        })
        .then(
          function (answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          },
          function () {
            $scope.status = "You cancelled the dialog.";
          }
        );
    };

    //OWN COMPONENT WITH OWN SCOPE
    dialogController.$inject = ["$scope", "$mdToast"];
    function dialogController($scope, $mdToast) {
      $scope.cont = 0;
      $scope.ableToAddQuestion = true;

      $scope.onInputChanges = () => {
        letuserAddQuestion();
      };

      $scope.onAddAnswer = () => {
        fillAnswersArray();
        if (!checkCorrectAnswerInsideAnswers()) {
          showToast("Correct answer must be included into possible questions");
          return;
        }
        $mdDialog.hide();
        toLowerQuestion();
        questionsArray.push($scope.question);
      };

      $scope.addAnswer = () => {
        $scope.cont++;
        const answersContainer = document.getElementById("answers");
        const answerTemplate = `
        <div class="w-full text-lg flex gap-3 items-center mb-3 mt-3">
            <h3>Answer ${$scope.cont}: </h3>
            <input class="answer-input" />
        </div>
        `;
        answersContainer.insertAdjacentHTML("beforeend", answerTemplate);
        letuserAddQuestion();
      };

      $scope.cancel = () => {
        $scope.question = {};
        $mdDialog.hide();
      };

      const fillAnswersArray = () => {
        const allAnswers = document.getElementsByClassName("answer-input");
        $scope.question.answers = [...allAnswers].map((x) => x.value);
      };

      const toLowerQuestion = () => {
        $scope.question.question = $scope.question.question.toLowerCase();
        $scope.question.correct_answer = $scope.question.question.toLowerCase();
        $scope.question.answers = $scope.question.answers.map((x) =>
          x.toLowerCase()
        );
      };

      const letuserAddQuestion = () => {
        fillAnswersArray();
        if (
          $scope.question.question &&
          $scope.question.correct_answer &&
          $scope.question.answers.length >= 2
        )
          $scope.ableToAddQuestion = false;
      };

      const checkCorrectAnswerInsideAnswers = () => {
        $scope.question.answers.map((x) => console.log(x));
        console.log($scope.question.correct_answer);
        if (
          $scope.question.answers.findIndex(
            (x) =>
              x.toLowerCase() === $scope.question.correct_answer.toLowerCase()
          ) === -1
        )
          return false;
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
    }
  }
})();
