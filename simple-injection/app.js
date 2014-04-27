var app = angular.module('app',[]);



app.controller('MyCtrl', ['$scope', function($scope) {

    $scope.firstName = 'Dave';

    $scope.updateName = function() {

        if ($scope.firstName && $scope.lastName) {
            $scope.displayName = $scope.firstName + ' ' +
                $scope.lastName;
        }
        else {
            $scope.displayName = "";
        }
    };
}]);

