let app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Mjölk", "Bröd", "Ost"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "Produkten finns redan i din lista!";
        }
    }
    $scope.removeItem = function (index) {
        $scope.errortext = "";
        $scope.products.splice(index, 1);
    }
});