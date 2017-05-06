angular.module('sample01', [
    'angular-spinner-button'
])
.controller('sample01Controller',['$scope', '$timeout',function($scope,$timeout) {
    $scope.processing = false;
    $scope.count = 0;

    $scope.click = function() {
        $scope.count =  $scope.count+1;
        $scope.message="start processing";
        $scope.processing = true;

        $timeout(function() {
            $scope.message="finish processing";
            $scope.processing = false;
        },5000);
    }
}]);