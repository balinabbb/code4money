app.controller('RegisterController', ['$scope', '$http', '$localStorage', function ($scope, $http, $localStorage) {

    $scope.wrap = (function () {

        var pub = {
            user: {
                email: null,
                password: null,
                repassword: null
            }
        };

        pub.Init = function () {
        };

        pub.RegisterUser = function () {
            if (!IsFormValid()) 
                return;

            RegisterUser($scope.wrap.user, function (response) {
                if (response.data === true) {
                    SetUserSession(
                        $localStorage,
                        new User(-1, "from@reg.com", ""),
                        "custom"
                    );
                    location.href = "#/Browse";
                } else
                    console.error("Hibás regisztráció!");
            });

        };

        function IsFormValid() {
            $scope.RegisterForm.$valid = true;

            if (!$scope.wrap.user.email) {
                $scope.RegisterForm.email.$error.isEmpty = true;
                $scope.RegisterForm.$valid = false;
            } else
                $scope.RegisterForm.email.$error.isEmpty = false;

            if (!$scope.wrap.user.password) {
                $scope.RegisterForm.password.$error.isEmpty = true;
                $scope.RegisterForm.$valid = false;
            } else
                $scope.RegisterForm.password.$error.isEmpty = false;

            if (!$scope.wrap.user.repassword) {
                $scope.RegisterForm.repassword.$error.isEmpty = true;
                $scope.RegisterForm.$valid = false;
            } else
                $scope.RegisterForm.repassword.$error.isEmpty = false;
            
            return ($scope.RegisterForm.$valid && !$scope.RegisterForm.$invalid);
        }

        return pub;

    }());

    function RegisterUser (user, callback) {
        $http({
            method: 'POST',
            url: '/Account/RegisterUser',
            data: user
        }).then(function successCallback(response) {
            callback(response);
        }, function errorCallback(response) {
            console.error(response.data);
        });
    }

}]);