app.controller('ImageViewController', ['$scope', '$localStorage', function ($scope, $localStorage) {

    $scope.wrap = (function () {

        var pub = {};

        pub.Init = function () {
            CheckUserSession($localStorage.user);
        };

        return pub;

    }());

}]);