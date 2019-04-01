// Skapa en AngularJS-modul
let app = angular.module("app", []);

// Skapa en controller
app.controller("personCtrl", function($scope) {
  $scope.firstName = "";
  $scope.lastName = "";
  $scope.fullName = function () {
      return $scope.firstName + ' ' + $scope.lastName;
  }
});

