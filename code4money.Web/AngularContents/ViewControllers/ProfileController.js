app.controller('ProfileController', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    $scope.page = (function () {

        var pub = {
            user: null
        };

        pub.Init = function () {
            CheckUserSession($localStorage.user);
            $scope.page.user = GetSessionUser($localStorage);
        };

        return pub;

    }());

}]);