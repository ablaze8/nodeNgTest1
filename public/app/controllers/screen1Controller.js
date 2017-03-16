(function () {
    'use strict';

    angular
        .module('app')
        .controller('screen1Controller', screen1Controller);

    screen1Controller.$inject = ['$scope']; 

    function screen1Controller($scope) {
        $scope.title = 'screen1Controller';

        $scope.class = '6400';

        activate();

        function activate() { }
    }
})();
