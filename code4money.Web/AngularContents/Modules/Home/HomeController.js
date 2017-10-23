app.controller("HomeController", ['$scope', '$state',
    function ($scope, $state) {

        console.log("Home loaded.");

        $scope.GoTo = function (val) {
            $state.go(val);
        };

    }]);