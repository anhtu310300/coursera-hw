(function () {
    'use strict';
    
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.checkLunch = function () {

            if (!$scope.lunchItems) {
                $scope.message = "Please check data first!"
                return;
            }

            var items = $scope.lunchItems.split(',');
            if (items.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too Much!";
            }
        }
    }

})();