app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

    $scope.wrap = (function () {

        var pub = {
            user: {
                email: null,
                password: null
            }
        };

        pub.Init = function () {
            console.log("LoginController Init");
        };

        pub.LoginUser = function () {

            if (!IsFormValid()) 
                return;

            LoginUser($scope.wrap.user, function (response) {
                if (response.data === true)
                    location.href = "#/Browse";
                else
                    console.error("Hibás felhasználónév vagy jelszó!");
            });

        };

        function IsFormValid() {
            $scope.LoginForm.$valid = true;

            if (!$scope.wrap.user.email) {
                $scope.LoginForm.email.$error.isEmpty = true;
                $scope.LoginForm.$valid = false;
            } else
                $scope.LoginForm.email.$error.isEmpty = false;

            if (!$scope.wrap.user.password) {
                $scope.LoginForm.password.$error.isEmpty = true;
                $scope.LoginForm.$valid = false;
            } else
                $scope.LoginForm.password.$error.isEmpty = false;
            
            return ($scope.LoginForm.$valid && !$scope.LoginForm.$invalid);
        }

        return pub;

    }());

    $scope.InputEvent = function (keyEvent, func) {
        if (keyEvent.which === 13) {
            func();
        }
    };

    function LoginUser (user, callback) {
        $http({
            method: 'POST',
            url: '/Account/LoginUser',
            data: user
        }).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            console.error(response.data);
        });
    };

}]);