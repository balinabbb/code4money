app.controller('LoginController', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {
    
    $scope.loading = false;

    $scope.wrap = (function () {

        var pub = {
            userInput: {
                email: null,
                password: null
            }
        };

        pub.Init = function () {
            console.log("LoginController Init");

            // Check session
            CheckUserSession($localStorage.user, true);

            $scope.loading = true;

            // Init facebook button
            if (!$scope.fb.get) {
                $scope.fb.Init(function () {
                    $scope.loading = false;
                });
            } else {
                $scope.loading = false;
            }
        };

        pub.FacebookLoginUser = function () {
            $scope.loading = true;
            $scope.fb.Login(function (response) {
                if (response) {
                    SetUserSession(
                        $localStorage,
                        new User(-1, response.email, response.name),
                        "facebook"
                    );
                    location.href = "#/Browse";
                }
                $scope.loading = false;
            });
        };

        pub.LoginUser = function () {

            // Check form
            if (!IsFormValid())
                return;

            $scope.loading = true;

            // Post login request
            PostLoginUser($scope.wrap.userInput, function (response) {
                if (response.data) {

                    // Set session
                    SetUserSession(
                        $localStorage,
                        new User(response.data.id, response.data.email, null),
                        "custom"
                    );

                    // Navigate
                    location.href = "#/Browse";

                    $scope.loading = false;

                } else
                    console.error("Hibás felhasználónév vagy jelszó!");
            });

        };

        function IsFormValid() {
            $scope.LoginForm.$valid = true;

            if (!$scope.wrap.userInput.email) {
                $scope.LoginForm.email.$error.isEmpty = true;
                $scope.LoginForm.$valid = false;
            } else
                $scope.LoginForm.email.$error.isEmpty = false;

            if (!$scope.wrap.userInput.password) {
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

    function PostLoginUser(user, callback) {
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