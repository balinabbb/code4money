app.controller('LoginController', ['$scope', function ($scope) {

    $scope.wrap = (function () {

        var pub = {};

        pub.Init = function () {
            console.log("LoginController Init");
        };

        return pub;

    }());

}]);