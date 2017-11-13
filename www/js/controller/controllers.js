  app.controller('todoCtrl', function ($scope, $ionicModal, localStorageService) {
    //store the entities name in a variable
    var taskData = 'task';

    //initialize the tasks scope with empty array
    $scope.tasks = [];

    //initialize the task scope with empty object
    $scope.task = {};

    //configure the ionic modal before use
    $ionicModal.fromTemplateUrl('new-task-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
       $scope.modal.show();
     };
     $scope.closeModal = function() {
       $scope.modal.hide();
     };
    $scope.getTasks = function () {
        //fetches task from local storage
        if (localStorageService.get(taskData)) {
                $scope.tasks = localStorageService.get(taskData);
            } else {
                $scope.tasks = [];
            }
    }
    $scope.createTask = function () {
          $scope.tasks.push($scope.task);
          localStorageService.set(taskData, $scope.tasks);
          $scope.task = {};
          //close new task modal
          $scope.modal.hide();
    }
    $scope.removeTask = function (index) {
            //removes a task
            $scope.tasks.splice(index, 1);
            localStorageService.set(taskData, $scope.tasks);
    }
    $scope.completeTask = function (index) {
      //updates a task as completed
      if (index !== -1) {
       $scope.tasks[index].completed = true;
      }
       localStorageService.set(taskData, $scope.tasks);
     }
  });

  app.controller('pageCtrl', function ($scope, $location) {
});
