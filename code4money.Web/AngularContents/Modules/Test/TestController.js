app.controller('TestController', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {

        $scope.htmls = {
            var1: null,
            var2: null
        };

        $scope.Init = function () {
            console.log("scope Init");

            console.log($scope.testVar);

            $scope.htmls.var1 = "Hello.";
            $scope.htmls.var2 = "Is it me you're looking for?";
        };

    }]);