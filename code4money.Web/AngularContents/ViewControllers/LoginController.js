app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

    $scope.wrap = (function () {

        var pub = {
            user: {
                username: null,
                password: null
            }
        };

        pub.Init = function () {
            console.log("LoginController Init");
        };

        pub.LoginUser = function () {

            if (!IsFormValid()) 
                return;

            $scope.LoginForm.username.$error.empty = false;

            $scope.LoginUser($scope.wrap.user, function (response) {
                if (response.data === true)
                    location.href = "#/Browse";
                else
                    console.error("Hibás felhasználónév vagy jelszó!");
            });

        };

        function IsFormValid() {
            if (!$scope.wrap.user.username)
                $scope.LoginForm.username.$error.isEmpty = true;
            else
                $scope.LoginForm.username.$error.isEmpty = false;


            if (!$scope.wrap.user.password)
                $scope.LoginForm.password.$error.isEmpty = true;
            else
                $scope.LoginForm.password.$error.isEmpty = false;

            return ($scope.LoginForm.$valid && !$scope.LoginForm.$invalid);
        }

        return pub;

    }());

    $scope.LoginUser = function (user, callback) {
        $http({
            method: 'POST',
            url: '/Login/LoginUser',
            data: user
        }).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            console.error(response.data);
        });
    };

}]);