(function () {
    'use strict';

    angular
        .module('app')
        .controller('screen2Controller', screen2Controller);

    screen2Controller.$inject = ['$scope']; 

    function screen2Controller($scope) {
        $scope.title = 'screen2Controller';

        $scope.name = 'AngularJS';

        activate();

        function activate() { }
    }
})();
